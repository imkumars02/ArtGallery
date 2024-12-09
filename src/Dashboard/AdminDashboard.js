import React from "react";
import { Eye } from "lucide-react";
import AdminHeader from "../Header/AdminHeader";
import { useNavigate } from "react-router-dom";

// Mock data for registered artists
const registeredArtists = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Williams", email: "bob@example.com" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 6, name: "Diana Ross", email: "diana@example.com" },
  { id: 7, name: "Edward Norton", email: "edward@example.com" },
  { id: 8, name: "Fiona Apple", email: "fiona@example.com" },
  { id: 9, name: "George Clooney", email: "george@example.com" },
  { id: 10, name: "Helen Mirren", email: "helen@example.com" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const handleViewFullInfo = (artistId) => {
    // Placeholder function for viewing full information
    // console.log(`Viewing full information for artist with ID: ${artistId}`);
    // In a real application, this would typically open a modal or navigate to a detailed view
    navigate('/ArtistInformation');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-600 mb-6">Registered Artists</h1>

        {/* Artist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {registeredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="p-4 flex flex-col items-center space-y-4"> {/* Flex column layout for stacking items vertically */}
                <img
                  src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                  alt={`${artist.name}'s avatar`}
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-800">{artist.name}</h2>
                  <p className="text-gray-600">{artist.email}</p>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                <button
                  onClick={() => handleViewFullInfo(artist.id)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
                >
                  <Eye size={18} className="mr-2" />
                  View Full Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
