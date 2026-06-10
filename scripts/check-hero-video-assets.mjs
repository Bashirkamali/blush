import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const configPath = path.join(root, "src/config/site.ts");
const config = readFileSync(configPath, "utf8");

const getString = (keyPath) => {
  const parts = keyPath.split(".");
  let cursor = config;

  for (const part of parts.slice(0, -1)) {
    const match = cursor.match(new RegExp(`${part}:\\s*\\{([\\s\\S]*?)\\n\\s*\\},`));
    if (!match) return "";
    cursor = match[1];
  }

  const leaf = parts.at(-1);
  const match = cursor.match(new RegExp(`${leaf}:\\s*"([^"]*)"`));
  return match?.[1] ?? "";
};

const enabled = /heroVideo:\s*\{[\s\S]*?enabled:\s*true/.test(config);

const toPublicPath = (assetPath) => {
  if (!assetPath) return "";
  const normalized = assetPath.replace(/^\.\//, "").replace(/^\//, "");
  return path.join(root, "public", normalized);
};

const entries = [
  {
    label: "poster",
    configKey: "heroVideo.poster",
    requiredWhenDisabled: true,
    requiredWhenEnabled: true,
    warnMb: 0.25,
  },
  {
    label: "desktop MP4",
    configKey: "desktop.mp4",
    requiredWhenEnabled: true,
    warnMb: 4,
    hardWarnMb: 6,
  },
  {
    label: "desktop WebM",
    configKey: "desktop.webm",
    requiredWhenEnabled: false,
    warnMb: 3,
  },
  {
    label: "mobile MP4",
    configKey: "mobile.mp4",
    requiredWhenEnabled: true,
    warnMb: 3,
    hardWarnMb: 5,
  },
  {
    label: "mobile WebM",
    configKey: "mobile.webm",
    requiredWhenEnabled: false,
    warnMb: 2,
  },
];

const failures = [];
const warnings = [];

console.log(`Hero video enabled: ${enabled}`);

for (const entry of entries) {
  const assetPath = getString(entry.configKey);
  const absolutePath = toPublicPath(assetPath);
  const exists = Boolean(assetPath) && existsSync(absolutePath);
  const required =
    (enabled && entry.requiredWhenEnabled) || (!enabled && entry.requiredWhenDisabled);

  if (!assetPath) {
    const message = `${entry.label}: config path is empty`;
    if (required) failures.push(message);
    else warnings.push(message);
    continue;
  }

  if (!exists) {
    const message = `${entry.label}: missing ${path.relative(root, absolutePath)}`;
    if (required) failures.push(message);
    else warnings.push(message);
    console.log(`${entry.label}: MISSING (${assetPath})`);
    continue;
  }

  const bytes = statSync(absolutePath).size;
  const mb = bytes / 1024 / 1024;
  console.log(`${entry.label}: ${assetPath} (${mb.toFixed(2)} MB)`);

  if (entry.hardWarnMb && mb > entry.hardWarnMb) {
    warnings.push(`${entry.label}: ${mb.toFixed(2)} MB exceeds hard warning ${entry.hardWarnMb} MB`);
  } else if (entry.warnMb && mb > entry.warnMb) {
    warnings.push(`${entry.label}: ${mb.toFixed(2)} MB exceeds recommended ${entry.warnMb} MB`);
  }
}

if (/siteConfig\.heroMedia\.mp4/.test(readFileSync(path.join(root, "src/components/Hero.tsx"), "utf8"))) {
  warnings.push("Hero.tsx still references legacy siteConfig.heroMedia.mp4");
}

if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (enabled && failures.length) {
  console.error("\nUnsafe hero video configuration:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

if (!enabled) {
  console.log("\nVideo is disabled, so missing video candidates/finals are warnings only.");
}

if (failures.length && !enabled) {
  console.error("\nRequired fallback assets are missing:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nHero video asset check passed.");
