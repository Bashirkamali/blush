import { siteConfig, whatsappUrl } from "../config/site";

const Footer = () => {
  return (
    <footer className="bg-[#171114] px-5 py-12 text-[#d9d2d5] sm:px-8 lg:px-12" dir="rtl">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <h3 className="font-serif text-3xl font-light tracking-[0.16em] text-white">
            {siteConfig.brandNameDisplay}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-8">
            {siteConfig.footer.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm text-white">{siteConfig.footer.quickLinksHeading}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {siteConfig.footer.quickLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm text-white">{siteConfig.footer.contactHeading}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={whatsappUrl} target="_blank" rel="noreferrer">واتساپ</a></li>
            <li><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">اینستاگرام</a></li>
            <li><a href={siteConfig.websiteUrl} target="_blank" rel="noreferrer">وبسایت بلاش</a></li>
            <li><a href={`tel:${siteConfig.phoneNumber}`}>{siteConfig.phoneNumber}</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6 text-xs text-[#aaa1a5]">
        © ۱۴۰۵ {siteConfig.brandNameFa}. همه حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
