import React from "react";
import { CheckCircle, Users, Zap } from "lucide-react";
import UserHeader from "./Header/UserHeader";
import artImage from './image/art.png';
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
            About ArtistryHub
          </h1>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 gap-8 p-8">
            <div className="relative h-64 md:h-auto">
              <img
                // src="./image/art.png?height=400&width=600"
                src={artImage}
                alt="Art gallery exhibition"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-indigo-700">
                Our Mission
              </h2>
              <p className="text-gray-600">
                At ArtistryHub, we believe that art has the power to transform
                lives. Our mission is to connect artists with art lovers through
                an immersive online platform that showcases stunning works of
                art from around the world. We are committed to fostering
                creativity, diversity, and community within the global art
                scene.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={24} />
                  <span className="text-gray-700">
                    Supporting emerging artists
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="text-blue-500 mr-2" size={24} />
                  <span className="text-gray-700">
                    Building a global community
                  </span>
                </div>
                <div className="flex items-center">
                  <Zap className="text-yellow-500 mr-2" size={24} />
                  <span className="text-gray-700">
                    Showcasing unique artworks
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Our History
              </h3>
              <p className="text-gray-600">
                ArtistryHub was founded in 2015 with the goal of creating a
                dynamic online space for both established and emerging artists
                to share their work and connect with art enthusiasts. What
                started as a small project quickly grew into a global platform
                with thousands of artists showcasing their art to a vast
                community of collectors and admirers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Our Team
              </h3>
              <p className="text-gray-600">
                Our team consists of passionate curators, designers, and
                developers who work tirelessly to bring the best art and
                experiences to our users. Together, we bridge the gap between
                digital technology and the world of fine art, empowering artists
                and art lovers alike.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Looking ahead, ArtistryHub envisions becoming the leading online
                art platform, known for promoting creativity, inclusivity, and
                innovation. We aim to foster an environment where art can be
                appreciated, bought, and sold with ease, while also supporting
                charitable causes within the art community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
