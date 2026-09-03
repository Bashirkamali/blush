import { siteConfig, whatsappUrl } from "../config/site";

const Footer = () => {
  const jalaliYear = new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date());
  return (
    <footer className="bg-[#171114] px-5 py-12 text-[#d9d2d5] sm:px-8 lg:px-12" dir="rtl">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <h3 className="text-2xl font-light tracking-[0.18em] text-white" lang="en" dir="ltr">
            {siteConfig.brandNameDisplay}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-8" lang="en" dir="ltr">
            {siteConfig.footer.description}
          </p>
          <p className="mt-3 max-w-md text-xs leading-7 text-[#aaa1a5]">{siteConfig.footer.serviceNote}</p>
        </div>

        <div>
          <h4 className="text-xs text-white" lang="en" dir="ltr">{siteConfig.footer.quickLinksHeading}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {siteConfig.footer.quickLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs text-white" lang="en" dir="ltr">{siteConfig.footer.contactHeading}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={whatsappUrl} target="_blank" rel="noreferrer">واتساپ</a></li>
            <li><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">اینستاگرام</a></li>
            <li><a href={siteConfig.websiteUrl} target="_blank" rel="noreferrer">ویترین روز</a></li>
            <li><a href={`tel:${siteConfig.phoneNumber}`}>{siteConfig.phoneNumber}</a></li>
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
