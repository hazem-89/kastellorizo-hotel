import { siteConfig } from "@/data/site-config";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Studios & Apartments", href: "#studios" },
  { label: "Getting here", href: "#travel" },
  { label: "Gallery", href: "#gallery" },
  { label: "Caretta Gift Shop", href: "#caretta" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2337] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-serif text-2xl font-bold text-white">
                {siteConfig.name}
              </p>
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mt-1">
                Kastellorizo · Greece
              </p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {siteConfig.description.split(".")[0]}.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              {/* <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <Instagram size={15} />
              </a> */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-widest font-semibold mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">
                  {siteConfig.contact.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors"
                    title={siteConfig.contact.phoneLabel}
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-xs text-white/40 ml-1">({siteConfig.contact.phoneLabel})</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {siteConfig.contact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Kastellorizo (Megisti), Dodecanese, Greece</p>
        </div>
      </div>
    </footer>
  );
}
