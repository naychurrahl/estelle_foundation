import { useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/app/components/ui/logo";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      console.log("for some reason");
      return location.pathname === "/home";
    }
    console.log(path);
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/#projects", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="shadow-md shadow-orange-50 sticky top-0 z-50 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span
              className="text-2xl text-cream-100"
              style={{ fontFamily: "Georgia, serif", fontWeight: 700 }}
            >
              Estelle
            </span>
            <span
              className="text-2xl ml-1 text-brand-primary"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Foundation
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative group px-4 py-2 transition-colors text-lg"
              >
                {link.submenu ? (
                  <>
                    <button
                      className="transition-colors"
                      style={{
                        color: isActive(link.path)
                          ? "var(--color-orange-50)"
                          : "var(--color-cream-50)",
                      }}
                      onMouseEnter={(e) =>
                        !isActive(link.path) &&
                        (e.currentTarget.style.color = "var(--color-orange-50)")
                      }
                      onMouseLeave={(e) =>
                        !isActive(link.path) &&
                        (e.currentTarget.style.color = "var(--color-cream-50)")
                      }
                    >
                      {link.label}
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-brand-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.path}
                          href={sublink.path}
                          className="block px-4 py-3 transition-colors text-brand-primary hover-bg-blue-50 hover-text-secondary"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.path}
                    className="transition-colors"
                    style={{
                      color: isActive(link.path)
                        ? "var(--color-orange-50)"
                        : "var(--color-cream-50)",
                    }}
                    onMouseEnter={(e) =>
                      !isActive(link.path) &&
                      (e.currentTarget.style.color = isActive(link.path)
                        ? "var(--color-orange-500)"
                        : "var(--color-orange-50)")
                    }
                    onMouseLeave={(e) =>
                      !isActive(link.path) &&
                      (e.currentTarget.style.color = "var(--color-cream-50)")
                    }
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/#get-involved"
              className="px-4 py-2 bg-cream-50/80 text-orange-600 hover:bg-orange-50 rounded-full transition-colors shadow-lg text-lg"
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-cream-50)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-orange-500)")
              }
            >
              Get Involved
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-gray-200">
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.submenu ? (
                  <>
                    <div
                      className="px-4 py-2 text-brand-primary"
                      style={{ fontWeight: 500 }}
                    >
                      {link.label}
                    </div>
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.path}
                        href={sublink.path}
                        className="block px-8 py-2 text-brand-gray-600 hover-bg-blue-50 hover-text-secondary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sublink.label}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={link.path}
                    className="block px-4 py-2"
                    style={{
                      color: isActive(link.path)
                        ? "var(--brand-secondary)"
                        : "var(--brand-primary)",
                      backgroundColor: isActive(link.path)
                        ? "var(--brand-blue-50)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(link.path)) {
                        e.currentTarget.style.backgroundColor =
                          "var(--brand-blue-50)";
                        e.currentTarget.style.color = "var(--brand-secondary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.path)) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--brand-primary)";
                      }
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="/#get-involved"
              className="btn-primary block mx-4 mt-4 text-center bg-cream-50/80 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
            Get Involved
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
