import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import art from "../image/art.png";
import art1 from "../image/art1.png";
import art2 from "../image/art2.png";
import ArtistsHeader from "../Header/ArtistsHeader";

// Mock data for exhibitions
const exhibitions = [
  {
    id: 1,
    title: "Modern Abstractions",
    description:
      "A showcase of contemporary abstract art pushing the boundaries of form and color.",
    date: "2023-05-15",
    images: [art, art1, art2],
  },
  {
    id: 2,
    title: "Nature's Palette",
    description:
      "An exploration of natural beauty through various artistic mediums.",
    date: "2023-07-22",
    images: [art, art1, art2],
  },
  {
    id: 3,
    title: "Urban Perspectives",
    description:
      "A collection of works depicting city life and architecture from around the world.",
    date: "2023-09-10",
    images: [art, art1, art2],
  },
];

const ExhibitionCard = ({ exhibition }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % exhibition.images.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [exhibition.images.length]);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % exhibition.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + exhibition.images.length) % exhibition.images.length
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 md:h-80">
        {exhibition.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={exhibition.title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{exhibition.title}</h2>
        <p className="text-gray-600 mb-4">{exhibition.description}</p>
        <p className="text-sm text-gray-500">
          Date:{" "}
          {new Date(exhibition.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default function Participate() {
  return (
    <>
      <ArtistsHeader />
      <div className="min-h-screen bg-gray-100 mt-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Participated Exhibitions
          </h1>
        </div>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
