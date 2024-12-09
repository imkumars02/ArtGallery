import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Palette, User, Menu, X, ChevronDown } from "lucide-react";

export default function ArtistsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
  };

  const navItems = [
    { name: "Home", path: "/ArtistsDashboard" },
    { name: "Participate", path: "/Participate" },
    { name: "Contents", path: "/Content" },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY) {
        setIsProfileOpen(false);
      }
      lastScrollY = currentScrollY;
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/");
  };

  const ProfileDropdown = () => (
    <div className="bg-white text-purple-800 rounded-lg shadow-2xl p-6 transition-all duration-300 ease-in-out opacity-100 border-t-4 border-yellow-400">
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
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-purple-800 shadow-lg"
          : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
      } mb-8`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/ArtistsDashboard"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Palette
              className={`${
                scrolled ? "text-yellow-400" : "text-yellow-300"
              } animate-spin-slow`}
              size={32}
            />
            <span className="font-serif italic">ArtistryHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-yellow-300 transition duration-300 ease-in-out relative group ${
                  scrolled ? "text-purple-800" : "text-white"
                }`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            ))}
          </nav>

          {/* Profile Icon */}
          <div
            className="hidden md:flex items-center space-x-4"
            ref={profileRef}
          >
            <button
              onClick={toggleProfile}
              className={`flex items-center space-x-2 ${
                scrolled
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              } px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-purple-700 transition duration-300 ease-in-out transform hover:scale-105`}
            >
              <User size={20} />
              <span>{user.name}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-4 top-full mt-2 w-72 animate-fadeIn">
                <ProfileDropdown />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              scrolled ? "text-purple-800" : "text-white"
            } focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 hover:text-yellow-300 transition duration-300 ease-in-out ${
                  scrolled ? "text-purple-800" : "text-white"
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleProfile();
                toggleMenu();
              }}
              className={`flex items-center space-x-2 hover:text-yellow-300 transition duration-300 ease-in-out mt-2 ${
                scrolled ? "text-purple-800" : "text-white"
              }`}
            >
              <User size={20} />
              <span>{user.name}</span>
            </button>
            {isProfileOpen && (
              <div className="mt-2 animate-fadeIn">
                <ProfileDropdown />
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
