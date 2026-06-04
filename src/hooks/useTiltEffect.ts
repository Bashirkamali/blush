import { useRef, useCallback, useEffect } from "react";

/* ─── Types ─── */

interface TiltOptions {
  /** Scale factor on hover (default: 1.02) */
  scale?: number;
  /** Maximum tilt angle in degrees (default: 12) */
  maxTilt?: number;
  /** Perspective value in px (default: 800) */
  perspective?: number;
  /** Transition speed in ms (default: 300) */
  transition?: number;
  /** Whether to reset tilt on mouse leave (default: true) */
  resetOnLeave?: boolean;
}

interface TiltReturn {
  /** Attach this ref to the element you want to tilt */
  ref: React.RefObject<HTMLDivElement>;
}

/* ─── Hook ─── */

export function useTiltEffect(options: TiltOptions = {}): TiltReturn {
  const {
    scale = 1.02,
    maxTilt = 12,
    perspective = 800,
    transition = 300,
    resetOnLeave = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * maxTilt;
      const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * maxTilt;

      el.style.transform = `perspective(${perspective}px) ` +
        `rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxTilt, perspective, scale],
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el || !resetOnLeave) return;
    el.style.transform = `perspective(${perspective}px) ` +
      `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective, resetOnLeave]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transition = `transform ${transition}ms ease-out`;
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";
    el.style.cursor = "pointer";

    el.addEventListener("mousemove", handleMouseMove as EventListener);
    el.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
      el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      el.style.transition = "";
      el.style.transform = "";
      el.style.transformStyle = "";
      el.style.willChange = "";
      el.style.cursor = "";
    };
  }, [handleMouseMove, handleMouseLeave, transition]);

  return { ref };
}