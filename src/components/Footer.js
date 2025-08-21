import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Diagonal } from "./Diagonal";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Diagonal color="fill-primary-700" flip={true} />
      <footer className="bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Socials */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img
                      src={"/images/logo2.png"}
                      alt="AGF Developer Logo"
                      className="h-10 object-contain"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61578907470468"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-gold-500 cursor-pointer transition-colors" />
                </a>

                <a
                  href="https://www.instagram.com/agfgroup.india/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-gold-500 cursor-pointer transition-colors" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-gold-500 cursor-pointer transition-colors" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-gold-500 cursor-pointer transition-colors" />
                </a>
              </div>

              {/* Legal Links */}
              <ul className="space-y-2">
                <li>
                  <a href="/disclaimer" className="text-gray-300 hover:text-gold-500 transition-colors">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/termsconditions" className="text-gray-300 hover:text-gold-500 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacypolicy" className="text-gray-300 hover:text-gold-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

        
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/businessSupport" className="text-gray-300 hover:text-gold-500 transition-colors">
                    Business Support
                  </a>
                </li>
                <li>
                  <a href="/broker-portal" className="text-gray-300 hover:text-gold-500 transition-colors">
                    Channel Partner
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:text-gold-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-gold-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gold-500" />
                  <span className="text-gray-300">+91 9211723338</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gold-500" />
                  <span className="text-gray-300">info@agfdeveloper.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-gold-500 mt-1" />
                  <span className="text-gray-300">
                    Assotech Business Cresterra, Tower-1, Office No. 917 & 918,
                    9th Floor, Sector 135, Noida, Uttar Pradesh 201305, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2004 AGF Developer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
