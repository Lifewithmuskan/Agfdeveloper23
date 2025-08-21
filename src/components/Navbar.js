import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openRegion, setOpenRegion] = useState(null);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOnMVF = location.pathname === "/mvf-project";

  const navigation = [
    { name: "Home", href: "/" },

 {
  name: "Projects",
  hasDropdown: true,
  dropdownItems: [
    {
      name: "Solra (Haryana)",
      subItems: [
        { name: "VEDIC VILLAGE", href: "/vedicvillage" },
        { name: "SMR GREEN WOODS-PHASE-1", href: "/smr" },
        { name: "ROYAL EMPIRE", href: "/comingsoon" },
        { name: "NEXTGEN VILLAGE", href: "/nextgen" },
        { name: "GOKUL ENCLAVE", href: "/comingsoon" },
        { name: "ADITYAM HERITAGE PHASE-1", href: "/comingsoon" },
        { name: "MVF", href: "/mvf" },
        { name: "ADITYAM HERITAGE PHASE-2", href: "/comingsoon" },
        { name: "GOLDEN GLOB CITY", href: "/comingsoon" },
        { name: "SMR GREEN WOODS PHASE-3", href: "/comingsoon" },
      ],
    },
    {
      name: "AmodaSari (Uttarakhand)",
      href: "/amodaSari",
    },
    {
      name: "Solon (Himachal)",
      href: "/comingsoon", 
    },
  ],
}
,

    isOnMVF
      ? { name: "About Us", href: "/mvf-project#about", isHashLink: true }
      : { name: "About Us", href: "/about" },

    { name: "Career", href: "/career" },

    isOnMVF
      ? { name: "Contact Us", href: "/mvf-project#decision-corner", isHashLink: true }
      : { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 shadow-md transition-colors duration-300 ${
        scrolled ? "bg-primary-700" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={scrolled ? "/images/logo2.png" : "/images/logo.png"}
                alt="AGF Developer Logo"
                className="h-10 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                      }
                      className={`flex items-center px-2 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        scrolled
                          ? "text-white hover:text-gray-200"
                          : location.pathname === item.href
                          ? "text-primary-600 border-b-2 border-primary-600"
                          : "text-gray-700 hover:text-primary-600"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transform transition-transform ${
                          isProjectsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isProjectsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg border border-gray-200 py-2 z-50">
{item.dropdownItems?.map((dropdownItem) => (
  <div key={dropdownItem.name} className="relative group">
    {dropdownItem.subItems ? (
      // If it has subItems → show expandable
      <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 cursor-pointer">
        {dropdownItem.name}
        <ChevronDown className="h-4 w-4 ml-2" />
      </div>
    ) : (
      // If it does NOT have subItems → make it a clickable link
      <Link
        to={dropdownItem.href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        onClick={() => setIsProjectsDropdownOpen(false)}
      >
        {dropdownItem.name}
      </Link>
    )}

    {dropdownItem.subItems && (
      <div className="absolute left-full top-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
        {dropdownItem.subItems.map((subItem) => (
          <Link
            key={subItem.name}
            to={subItem.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
            onClick={() => setIsProjectsDropdownOpen(false)}
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    )}
  </div>
))}

                      </div>
                    )}
                  </div>
                ) : item.isHashLink ? (
                  <HashLink
                    smooth
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? "text-white hover:text-gray-200"
                        : location.pathname === item.href.split("#")[0]
                        ? "text-primary-600 border-b-2 border-primary-600"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      scrolled
                        ? "text-white hover:text-gray-200"
                        : location.pathname === item.href
                        ? "text-primary-600 border-b-2 border-primary-600"
                        : "text-gray-700 hover:text-primary-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Phone button */}
            <a
              href="tel:+919211723338"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                scrolled
                  ? "text-primary-700 bg-white hover:bg-primary-200 hover:text-primary-900"
                  : "text-primary-600 bg-primary-50 hover:bg-primary-100"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 9211723338</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-white" : "text-gray-700"
              } hover:text-primary-600`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`lg:hidden ${
            scrolled ? "bg-primary-700 text-white" : "bg-white text-gray-700"
          } shadow-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium hover:opacity-80"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform ${
                          isProjectsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isProjectsDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <div key={dropdownItem.name}>
                            <button
                              onClick={() =>
                                setOpenRegion(
                                  openRegion === dropdownItem.name
                                    ? null
                                    : dropdownItem.name
                                )
                              }
                              className="flex justify-between items-center w-full px-3 py-2 text-sm hover:opacity-80"
                            >
                              {dropdownItem.name}
                              <ChevronDown
                                className={`h-4 w-4 transform transition-transform ${
                                  openRegion === dropdownItem.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            {openRegion === dropdownItem.name &&
                              dropdownItem.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block pl-6 pr-3 py-2 text-sm hover:opacity-80"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenRegion(null);
                                    setIsProjectsDropdownOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.isHashLink ? (
                  <HashLink
                    smooth
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium hover:opacity-80"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium hover:opacity-80"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <a
              href="tel:+919211723338"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg mt-2 ${
                scrolled
                  ? "bg-white text-primary-700 hover:bg-gray-200"
                  : "text-primary-600 bg-primary-50 hover:bg-primary-100"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+91 9211723338</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
