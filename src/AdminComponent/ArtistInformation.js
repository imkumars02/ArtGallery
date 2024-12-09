import React from "react";
import AdminHeader from "../Header/AdminHeader";
import { Calendar, Package, Mail, Phone, MapPin } from "lucide-react";

// Importing actual images for products
import art from "../image/art.png";
import art1 from "../image/art1.png";
import art2 from "../image/art2.png";

// Mock data for artist's personal information
const artistInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
  mobile: "+1234567890",
  address: "123 Art Street, Art City, Art Country",
  profileImage:
    "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
  bio: "Passionate artist with a focus on abstract expressionism and digital art. Creating vibrant pieces that challenge perception and evoke emotion.",
};

// Mock data for uploaded content by the artist
const uploadedContent = [
  {
    id: 1,
    title: "Abstract Painting",
    description: "A vibrant abstract piece with bold colors and shapes.",
    uploadedDate: "2024-10-10",
    quantity: 5,
    image: art, // Actual image path
  },
  {
    id: 2,
    title: "Landscape Photography",
    description: "Beautiful mountain scenery captured during golden hour.",
    uploadedDate: "2024-09-20",
    quantity: 3,
    image: art1, // Actual image path
  },
  {
    id: 3,
    title: "Ceramic Vase",
    description: "Hand-crafted ceramic vase with intricate details.",
    uploadedDate: "2024-08-15",
    quantity: 10,
    image: art2, // Actual image path
  },
  {
    id: 4,
    title: "Digital Artwork",
    description: "A futuristic city skyline rendered digitally.",
    uploadedDate: "2024-10-01",
    quantity: 7,
    image: art, // Actual image path
  },
  {
    id: 5,
    title: "Wooden Sculpture",
    description: "An abstract sculpture carved from reclaimed wood.",
    uploadedDate: "2024-07-30",
    quantity: 2,
    image: art1, // Actual image path
  },
];

const ArtistInformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Artist Profile Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src={artistInfo.profileImage}
                alt={`${artistInfo.name}'s profile`}
                className="h-48 w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Artist Profile
              </div>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {artistInfo.name}
              </h2>
              <p className="mt-2 text-gray-500">{artistInfo.bio}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2" />
                  {artistInfo.email}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  {artistInfo.mobile}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {artistInfo.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Uploaded Content by Artist Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Uploaded Content by {artistInfo.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploadedContent.map((content) => (
              <div
                key={content.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {content.uploadedDate}
                    </div>
                    <div className="flex items-center">
                      <Package className="h-4 w-4 mr-1" />
                      Qty: {content.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInformation;
