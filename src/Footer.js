import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">ArtistryHub</h2>
            <p className="text-gray-400 mb-4">
              Discover and collect extraordinary artworks from talented artists
              around the world.
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/UserDashboard"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Orders"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest art news and exclusive
              offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-64 w-full"
                required
              />
              {/* Styled Subscribe Button */}
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              >
                <Mail size={18} className="mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ArtistryHub. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <Link
              to="/PrivacyPolicy"
              className="text-gray-400 hover:text-white text-sm mr-4 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/TermCondition"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
