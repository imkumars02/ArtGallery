import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  X,
  Palette,
  ChevronDown,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY) {
        setIsProfileOpen(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);

  const handleLogout = () => {
    navigate("/"); 
  };

  const ProfileDropdown = () => (
    <div className="bg-white text-purple-800 rounded-lg shadow-2xl p-6 transition-all duration-300 ease-in-out transform opacity-100 border-t-4 border-yellow-400">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border-4 border-purple-200 shadow-md"
        />
        <div>
          <p className="font-bold text-lg">{user.name}</p>
          <p className="text-sm text-purple-600">{user.phone}</p>
          <p className="text-sm text-purple-400">{user.email}</p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-6 w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg"
      >
        Logout
      </button>
    </div>
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 bg-white text-purple-800 shadow-lg mb-8`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold italic flex items-center space-x-2">
            <Palette className="text-black-400 animate-spin-slow" size={28} />
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300 relative group"
            >
              ArtistryHub
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {["Home", "Orders", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/UserDashboard" : `/${item}`}
                className="text-purple-800 hover:text-yellow-400 transition duration-300 ease-in-out relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Cart and Profile Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/cart"
              className="flex items-center text-purple-800 hover:text-yellow-400 transition duration-300 ease-in-out"
            >
              <ShoppingCart className="mr-1" size={20} />
              <span>Cart</span>
            </Link>

            {/* User Profile Icon */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2 text-purple-800 hover:text-yellow-400 transition duration-300 ease-in-out"
              >
                <User className="mr-1" size={20} />
                <span>{user.name}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-4 w-72 animate-fadeIn">
                  <ProfileDropdown />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-purple-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mt-4 md:hidden bg-white rounded-lg shadow-xl animate-slideDown">
          <ul className="py-2">
            {["Home", "Orders", "About", "Contact", "Cart"].map((item) => (
              <li key={item}>
                <Link
                  to={
                    item === "Home"
                      ? "/UserDashboard"
                      : `/${item.toLowerCase()}`
                  }
                  className="flex items-center px-4 py-2 text-purple-800 hover:bg-purple-100 transition duration-300 ease-in-out"
                >
                  {item === "Cart" && (
                    <ShoppingCart className="mr-2" size={20} />
                  )}
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center w-full px-4 py-2 text-purple-800 hover:bg-purple-100 transition duration-300 ease-in-out"
              >
                <User className="mr-2" size={20} />
                {user.name}
                <ChevronDown
                  size={16}
                  className={`ml-auto transition-transform duration-300 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProfileOpen && (
                <div className="px-4 py-2 animate-fadeIn">
                  <ProfileDropdown />
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
