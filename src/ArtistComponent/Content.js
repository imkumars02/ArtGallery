import React from "react";
import {
  Paintbrush,
  Camera,
  Edit3, // Placeholder icon for Vase
  Monitor,
  Trees, // Replaced Tree with Trees
  Palette,
  Wine,
  Hexagon,
  Shirt,
  Hammer, // Replaced Chisel with Hammer
} from "lucide-react";
import art from "../image/art.png";
import art1 from "../image/art1.png";
import art2 from "../image/art2.png";
import ArtistsHeader from "../Header/ArtistsHeader";

// Array of images to alternate between
const images = [art, art1, art2];

// Mock data for the content uploaded by artists
const contentData = [
  {
    id: 1,
    title: "Abstract Painting",
    description: "A vibrant abstract piece with bold colors and shapes.",
    quantity: 5,
    image: images[0], // Using first image (art.png)
    icon: <Paintbrush className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "Landscape Photo",
    description: "Beautiful mountain scenery captured during golden hour.",
    quantity: 3,
    image: images[1], // Using second image (art1.png)
    icon: <Camera className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Ceramic Vase",
    description: "Hand-crafted ceramic vase with intricate details.",
    quantity: 8,
    image: images[2], // Using third image (art2.png)
    icon: <Edit3 className="h-6 w-6" />, // Placeholder icon instead of Vase
  },
  {
    id: 4,
    title: "Digital Illustration",
    description: "A futuristic city skyline rendered digitally.",
    quantity: 10,
    image: images[0], // Using first image (art.png)
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    id: 5,
    title: "Wooden Sculpture",
    description: "An abstract sculpture carved from reclaimed wood.",
    quantity: 2,
    image: images[1], // Using second image (art1.png)
    icon: <Trees className="h-6 w-6" />, // Replaced Tree with Trees
  },
  {
    id: 6,
    title: "Oil Painting",
    description: "A classic still life featuring fruits and flowers.",
    quantity: 4,
    image: images[2], // Using third image (art2.png)
    icon: <Palette className="h-6 w-6" />,
  },
  {
    id: 7,
    title: "Glass Artwork",
    description: "Colorful blown glass art piece inspired by nature.",
    quantity: 6,
    image: images[0], // Using first image (art.png)
    icon: <Wine className="h-6 w-6" />,
  },
  {
    id: 8,
    title: "Metal Wall Art",
    description: "A modern geometric metal wall decor piece.",
    quantity: 7,
    image: images[1], // Using second image (art1.png)
    icon: <Hexagon className="h-6 w-6" />,
  },
  {
    id: 9,
    title: "Textile Art",
    description: "Handwoven tapestry made from natural fibers.",
    quantity: 3,
    image: images[2], // Using third image (art2.png)
    icon: <Shirt className="h-6 w-6" />,
  },
  {
    id: 10,
    title: "Stone Carving",
    description: "An intricate stone sculpture of a mythical creature.",
    quantity: 1,
    image: images[0], // Using first image (art.png)
    icon: <Hammer className="h-6 w-6" />, // Replaced Chisel with Hammer
  },
];

export default function Content() {
  return (
    <>
      <ArtistsHeader />
      <div className="min-h-screen bg-gradient-to-b from-white-100 to-gray-200">
        <main className="container mx-auto px-4 py-8 mt-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Uploaded Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contentData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    {item.icon}
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      Quantity: {item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
