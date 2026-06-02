import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiTiktok, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

export function Footer() {
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
            <p className="text-slate-400 text-sm">
              Growing Minds, Strengthening Communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>123 Community Street, City, ST 12345</span>
              </li>
              <a href="tel:+2348170553328">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0" />
                  <span>+234 817 055 3328</span>
                </li>
              </a>
              <a href="tel:+2348164869895">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0" />
                  <span>+234 816 486 9895</span>
                </li>
              </a>
              <a href="tel:+2348100359717">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0" />
                  <span>+234 810 035 9717</span>
                </li>
              </a>
              <a href="mailto:">
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0" />
                  <span>theestellefoundation@gmail.com</span>
                </li>
              </a>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Follow Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex items-center gap-2">
                  <div className="size-9 rounded-full bg-slate-800 hover:bg-pink-400 flex items-center justify-center transition-colors">
                    <SiInstagram className="size-4" />
                  </div>
                  <span>@theestellefoundation</span>
                </li>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex items-center gap-2 my-2">
                  <div className="size-9 rounded-full bg-slate-800 hover:bg-purple-400 flex items-center justify-center transition-colors">
                    <SiTiktok className="size-4" />
                  </div>
                  <span>@theestellefoundati</span>
                </li>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex items-center gap-2">
                  <div className="size-9 rounded-full bg-slate-800 hover:bg-purple-400 flex items-center justify-center transition-colors">
                    <SiX className="size-4" />
                  </div>
                  <span>@_eefoundation</span>
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Community Outreach. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
