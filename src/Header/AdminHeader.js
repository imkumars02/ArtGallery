import React, { useState } from "react";
import { Home, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const AdminHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login state
  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
    navigate("/");
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-2xl font-bold">
                <img
                  src="https://www.logolynx.com/images/logolynx/23/23938578fb8d88c02bc59906d12230f3.png" // Replace with actual image path
                  alt="Admin Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </span>
            </div>
            <span className="text-xl font-semibold cursor-pointer" onClick={()=>{navigate('/AdminDashboard');}}>Admin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/AdminDashboard" // Using Link instead of <a>
              className="flex items-center space-x-1 hover:text-purple-200 transition duration-150"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            {/* <Link
              to="/artists" // Using Link instead of <a>
              className="flex items-center space-x-1 hover:text-purple-200 transition duration-150"
            >
              <Users size={20} />
              <span>Artists</span>
            </Link> */}
          </nav>

          {/* Admin Profile and Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://www.logolynx.com/images/logolynx/23/23938578fb8d88c02bc59906d12230f3.png" // Replace with actual image path
                alt="Admin Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              {/* <span className="font-medium">Admin</span> */}
            </div>
            {isLoggedIn && ( // Check if the user is logged in
              <button
                onClick={handleLogout} // Call the logout function
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1 transition duration-150"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <Link
              to="/home" // Using Link instead of <a>
              className="block py-2 hover:text-purple-200 transition duration-150"
            >
              <Home size={20} className="inline mr-2" />
              Home
            </Link>
            {/* <Link
              to="/artists" // Using Link instead of <a>
              className="block py-2 hover:text-purple-200 transition duration-150"
            >
              <Users size={20} className="inline mr-2" />
              Artists
            </Link> */}
            <div className="mt-4 pt-4 border-t border-purple-500">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://www.logolynx.com/images/logolynx/23/23938578fb8d88c02bc59906d12230f3.png" // Replace with actual image path
                  alt="Admin Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <span className="font-medium">Admin</span>
              </div>
              {isLoggedIn && ( // Check if the user is logged in
                <button
                  onClick={handleLogout} // Call the logout function
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full text-sm flex items-center justify-center space-x-1 transition duration-150"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
