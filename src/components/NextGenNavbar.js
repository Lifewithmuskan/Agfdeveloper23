import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, Phone } from "lucide-react";

const NextGenNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOnNextGen = location.pathname === "/Nextgen";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/Nextgen#about", isHashLink: true },
    { name: "Features", href: "/Nextgen#features", isHashLink: true },
    { name: "Connectivity", href: "/Nextgen#connectivity", isHashLink: true },
    { name: "Gallery", href: "/Nextgen#gallery", isHashLink: true },
    { name: "Location", href: "/Nextgen#location", isHashLink: true },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 shadow-md transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Developer Logo"
                className="h-10 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.isHashLink ? (
                  <HashLink
                    smooth
                    to={item.href}
                    className={`px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                      scrolled
                        ? "text-gray-800 hover:text-green-600"
                        : location.pathname === item.href.split("#")[0]
                        ? "text-white"
                        : "text-white hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                      scrolled
                        ? "text-gray-800 hover:text-green-600"
                        : location.pathname === item.href
                        ? "text-white"
                        : "text-white hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <a
              href="tel:+918987676633"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? "text-gray-800 bg-green-100 hover:bg-green-200 hover:text-green-600"
                  : "text-white bg-green-600/30 hover:bg-green-600/50"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-bold">+91 8987676633</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? "text-gray-800" : "text-white"} hover:text-green-600`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden ${
            scrolled ? "bg-white text-gray-800" : "bg-white text-gray-800"
          } shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.isHashLink ? (
                  <HashLink
                    smooth
                    to={item.href}
                    className="block px-3 py-2 text-base font-bold hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-bold hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <a
              href="tel:+918987676633"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg mt-2 ${
                scrolled
                  ? "bg-green-100 text-gray-800 hover:bg-green-200"
                  : "text-green-600 bg-white hover:bg-green-50"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-bold">+91 8987676633</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NextGenNavbar;