import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import UserHeader from "../Header/UserHeader";

import art from "../image/art.png";
import art1 from "../image/art1.png";
import art2 from "../image/art2.png";
import Footer from "../Footer";

const paintings = [
  {
    id: 1,
    title: "Starry Night",
    artist: "Vincent van Gogh",
    price: 1000,
    image: art,
  },
  {
    id: 2,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    price: 1500,
    image: art1,
  },
  {
    id: 3,
    title: "The Scream",
    artist: "Edvard Munch",
    price: 1200,
    image: art2,
  },
  {
    id: 4,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    price: 1800,
    image: art1, // Reusing art1 as an example
  },
];

const UserDashboard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantities, setQuantities] = useState(() => {
    return paintings.reduce(
      (acc, painting) => ({ ...acc, [painting.id]: 1 }),
      {}
    );
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % paintings.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change),
    }));
  };

  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-10">
          <h1 className="text-3xl font-bold italic text-center text-indigo-500 mb-12">
            Welcome to ArtistryHub
          </h1>

          <div className="relative mb-16 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={paintings[currentImageIndex].image}
              alt={`Exhibition ${currentImageIndex + 1}`}
              className="w-full h-[400px] object-cover md:h-[500px] lg:h-[600px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-between">
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + paintings.length) % paintings.length
                  )
                }
                className="text-white p-4 hover:bg-white hover:bg-opacity-20 rounded-full transition duration-300 ml-4"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-2">Upcoming Exhibition</h2>
                <p className="text-xl">Discover the beauty of art</p>
              </div>
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (prevIndex) => (prevIndex + 1) % paintings.length
                  )
                }
                className="text-white p-4 hover:bg-white hover:bg-opacity-20 rounded-full transition duration-300 mr-4"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintings.map((painting) => (
              <div
                key={painting.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transform hover:scale-105 transition duration-300"
              >
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="flex flex-col p-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 truncate">
                    {painting.title}
                  </h3>
                  <p className="text-gray-600 mb-2">by {painting.artist}</p>
                  <p className="text-indigo-600 font-bold text-xl mb-4">
                    ${painting.price}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center border-2 border-indigo-200 rounded-full">
                      <button
                        onClick={() => handleQuantityChange(painting.id, -1)}
                        className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 transition duration-300 text-lg font-semibold rounded-l-full"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-lg font-semibold">
                        {quantities[painting.id]}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(painting.id, 1)}
                        className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 transition duration-300 text-lg font-semibold rounded-r-full"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add buttons section */}
                  <div className="flex flex-col space-y-3 mt-auto">
                    {/* Link to the Buy page */}
                    <Link to="/Buy" className="w-full">
                      <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-full hover:from-indigo-600 hover:to-purple-700 transition duration-300 flex items-center justify-center text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <CreditCard size={20} className="mr-2" />
                        Buy Now
                      </button>
                    </Link>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-4 rounded-full hover:from-purple-600 hover:to-indigo-700 transition duration-300 flex items-center justify-center text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      <ShoppingCart size={20} className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default UserDashboard;
