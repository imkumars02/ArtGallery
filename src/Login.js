import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  LogIn,
  UserPlus,
  ArrowLeft,
  Mail,
  Phone,
  User,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("user");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log("Login data:", {
        email: formData.email,
        password: formData.password,
        role,
      });

      // Navigate based on role (replace with actual navigation logic)
      if (role === "user") {
        navigate("/UserDashboard");
      }
      if (role === "artist") {
        navigate("/ArtistsDashboard"); // Fix here
      } else if (role === "admin") {
        navigate("/AdminDashboard");
      }
    } else {
      // Handle registration logic here
      console.log("Registration data:", formData);
      // After successful registration, switch to login view
      setIsLogin(true);
    }
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-blueish-700 to-brownish-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full transform transition-all duration-500 ease-in-out">
        <div className="p-8">
          <h2 className="text-3xl text-center text-gray-500 mb-8 animate-fade-in">
            {isLogin ? "Login to Continue" : "Create an Account"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className={`space-y-4 ${
                isLogin ? "animate-slide-down" : "animate-slide-up"
              }`}
            >
              {!isLogin && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                      placeholder="Full Name"
                      required
                    />
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                      placeholder="Phone Number"
                      required
                    />
                    <Phone
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </>
              )}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Email Address"
                  required
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Password"
                  required
                />
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {!isLogin && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                    placeholder="Confirm Password"
                    required
                  />
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              )}
            </div>
            {isLogin && (
              <div className="bg-gray-100 rounded-lg p-2 animate-fade-in">
                <div className="flex justify-between">
                  {["user", "artist", "admin"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRole(option)}
                      className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                        role === option
                          ? "bg-white text-purple-600 shadow-md"
                          : "text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition duration-300 flex items-center justify-center animate-pulse-light"
            >
              {isLogin ? (
                <>
                  <LogIn size={20} className="mr-2" /> Login
                </>
              ) : (
                <>
                  <UserPlus size={20} className="mr-2" /> Register
                </>
              )}
            </button>
          </form>
          <div className="mt-6 text-center animate-fade-in">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleView}
                className="text-purple-600 hover:text-purple-800 font-semibold flex items-center justify-center mx-auto mt-2"
              >
                {isLogin ? (
                  <>
                    <UserPlus size={18} className="mr-2" /> Register
                  </>
                ) : (
                  <>
                    <ArrowLeft size={18} className="mr-2" /> Back to Login
                  </>
                )}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
