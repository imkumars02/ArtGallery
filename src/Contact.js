import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import UserHeader from "./Header/UserHeader";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">
            Get in Touch
          </h1>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Mail className="mr-4" size={24} />
                  ganeshbagul@gmail.com
                </p>
                <p className="flex items-center">
                  <Phone className="mr-4" size={24} />
                  +91 9876543210
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-4" size={24} />
                  Makhamalabaad Road Nashik
                </p>
              </div>
            </div>

            <form className="p-6 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 focus:outline-none p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 focus:outline-none p-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 focus:outline-none p-2"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
