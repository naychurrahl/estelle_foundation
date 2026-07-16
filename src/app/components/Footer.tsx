import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiTiktok, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { type SocialLink } from "@/app/lib/siteContent";
import { useSiteContent } from "@/app/contexts/SiteContentContext";

const SOCIAL_ICONS: Record<SocialLink["platform"], typeof SiInstagram> = {
  instagram: SiInstagram,
  tiktok: SiTiktok,
  x: SiX,
};

const SOCIAL_HOVER: Record<SocialLink["platform"], string> = {
  instagram: "hover:bg-pink-400",
  tiktok: "hover:bg-purple-400",
  x: "hover:bg-slate-600",
};

export function Footer() {
  const { footer } = useSiteContent();
  const { tagline, address, phones, email, quickLinks, social, copyrightName } =
    footer;

  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-20 aspect-[16/9] flex items-center justify-center">
                <img
                  src="/logo_w.png"
                  alt="Estelle Foundation Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm">{tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>{address}</span>
              </li>
              {phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`}>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4 shrink-0" />
                    <span>{phone}</span>
                  </li>
                </a>
              ))}
              <a href={`mailto:${email}`}>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0" />
                  <span>{email}</span>
                </li>
              </a>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {social.map((link) => {
                const Icon = SOCIAL_ICONS[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="flex items-center gap-2 my-2">
                      <div
                        className={`size-9 rounded-full bg-slate-800 ${SOCIAL_HOVER[link.platform]} flex items-center justify-center transition-colors`}
                      >
                        <Icon className="size-4" />
                      </div>
                      <span>{link.handle}</span>
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {copyrightName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
