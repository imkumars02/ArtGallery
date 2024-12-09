import React from "react";
import ArtistsHeader from "../Header/ArtistsHeader"; // Ensure this is a valid component
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import art from '../image/art.png'
import art1 from '../image/art1.png'
import art2 from '../image/art2.png'

const ArtistsDashboard = () => {
  // Mock data for 10 products
  const products = [
    {
      id: 1,
      title: "Abstract Painting",
      description: "A vibrant abstract piece",
      quantity: 5,
      image: art,
    },
    {
      id: 2,
      title: "Landscape Photo",
      description: "Beautiful mountain scenery",
      quantity: 3,
      image: art1,
    },
    {
      id: 3,
      title: "Ceramic Vase",
      description: "Hand-crafted ceramic vase",
      quantity: 8,
      image: art2,
    },
    {
      id: 4,
      title: "Digital Illustration",
      description: "Futuristic city illustration",
      quantity: 10,
      image: art,
    },
    {
      id: 5,
      title: "Wooden Sculpture",
      description: "Abstract wooden sculpture",
      quantity: 2,
      image: art1,
    },
    {
      id: 6,
      title: "Oil Painting",
      description: "Classic still life painting",
      quantity: 4,
      image: art2,
    },
    {
      id: 7,
      title: "Glass Artwork",
      description: "Colorful blown glass piece",
      quantity: 6,
      image: art,
    },
    {
      id: 8,
      title: "Metal Wall Art",
      description: "Modern metal wall decor",
      quantity: 7,
      image: art1,
    },
    {
      id: 9,
      title: "Textile Art",
      description: "Handwoven tapestry",
      quantity: 3,
      image: art2,
    },
    {
      id: 10,
      title: "Stone Carving",
      description: "Intricate stone sculpture",
      quantity: 1,
      image: art,
    },
  ];

  const handleUpload = () => {
    // Implement upload functionality
    console.log("Upload content clicked");
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit product with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete product with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <ArtistsHeader />
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Artist Dashboard</h1>
          <button
            onClick={handleUpload}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 flex items-center"
          >
            <PlusCircle className="mr-2" size={20} />
            Upload Content
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-700 font-medium mb-4">
                  Quantity: {product.quantity}
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
                  >
                    <Edit size={16} className="mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArtistsDashboard;
