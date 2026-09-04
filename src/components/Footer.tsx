import { siteConfig } from "../config/site";

const Footer = () => {
  const jalaliYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date());
  return (
    <footer className="relative z-[17] bg-[#171114] px-5 py-12 text-[#d9d2d5] sm:px-8 lg:px-12" dir="rtl">
      <div className="mx-auto grid max-w-7xl gap-10 text-right md:grid-cols-[1.35fr_0.65fr] md:gap-20">
        <div className="text-right">
          <h3 className="!text-right text-2xl font-light tracking-[0.18em] text-white" lang="en" dir="ltr">
            {siteConfig.brandNameDisplay}
          </h3>
          <p className="mt-5 max-w-md !text-right text-sm leading-8" lang="en" dir="ltr">
            {siteConfig.footer.description}
          </p>
          <p className="mt-3 max-w-md text-xs leading-7 text-[#aaa1a5]">{siteConfig.footer.serviceNote}</p>
        </div>

        <div className="text-right">
          <h4 className="!text-right text-xs text-white" lang="en" dir="ltr">{siteConfig.footer.quickLinksHeading}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {siteConfig.footer.quickLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6 text-xs text-[#aaa1a5]">
        © {jalaliYear} {siteConfig.brandNameFa}. همه حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
