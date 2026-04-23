import { organizationInfo } from "@/app/data/ngoData";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl">{organizationInfo.name}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {organizationInfo.motto}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href={`https://${organizationInfo.contact.website.values[0]}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {organizationInfo.contact.website.values[0]}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${organizationInfo.contact.email.values[0]}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {organizationInfo.contact.email.values[0]}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" />
                <a
                  href={`tel:${organizationInfo.contact.phone.values[0]}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {organizationInfo.contact.phone.values[0]}
                </a>, 
                <a
                  href={`tel:${organizationInfo.contact.phone.values[1]}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {organizationInfo.contact.phone.values[1]}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>{organizationInfo.contact.address.values[0]}</span>
              </div>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="hover:text-orange-500 transition-colors"
                >
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Annual Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay connected with our work and impact
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 {organizationInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
