import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import art from "../image/art.png";
import art1 from "../image/art1.png";
import art2 from "../image/art2.png";
import UserHeader from "../Header/UserHeader";
import Footer from "../Footer";

const mockOrders = [
  {
    id: "1234-5678",
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "High-quality over-ear headphones with active noise cancellation",
    image: art,
    date: "2023-05-15",
    deliveredTime: "2023-05-18 14:30",
    price: 249.99,
    status: "Delivered",
  },
  {
    id: "8765-4321",
    title: "Smart Home Security Camera",
    description:
      "1080p HD indoor security camera with night vision and two-way audio",
    image: art1,
    date: "2023-05-10",
    deliveredTime: "Estimated 2023-05-20",
    price: 79.99,
    status: "In Transit",
  },
  {
    id: "2468-1357",
    title: "Ergonomic Office Chair",
    description:
      "Adjustable office chair with lumbar support and breathable mesh back",
    image: art2,
    date: "2023-05-05",
    deliveredTime: "Processing",
    price: 199.99,
    status: "Processing",
  },
  {
    id: "1357-2468",
    title: "Stainless Steel Water Bottle",
    description:
      "Vacuum insulated water bottle that keeps drinks cold for 24 hours",
    image: art1,
    date: "2023-04-30",
    deliveredTime: "2023-05-03 10:15",
    price: 29.99,
    status: "Delivered",
  },
  {
    id: "9876-5432",
    title: "Portable Bluetooth Speaker",
    description: "Waterproof Bluetooth speaker with 20-hour battery life",
    image: art2,
    date: "2023-04-25",
    deliveredTime: "2023-04-28 16:45",
    price: 89.99,
    status: "Delivered",
  },
];

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
  });

  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold text-indigo-800 mb-8">
            Your Order History
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center mb-6">
              <Search className="text-indigo-400 mr-2" />
              <input
                type="text"
                placeholder="Search orders by title or ID"
                className="w-full p-3 bg-indigo-50 text-indigo-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-indigo-600 font-medium">
                Showing {sortedOrders.length} orders
              </span>
              <button
                className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium transition duration-300"
                onClick={() =>
                  setSortOrder(sortOrder === "desc" ? "asc" : "desc")
                }
              >
                Sort by date
                {sortOrder === "desc" ? (
                  <ChevronDown className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronUp className="ml-1 w-4 h-4" />
                )}
              </button>
            </div>

            {sortedOrders.map((order) => (
              <div
                key={order.id}
                className="bg-indigo-50 rounded-xl p-6 mb-6 transition duration-300 hover:shadow-md"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={order.image}
                    alt={order.title}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-xl font-semibold text-indigo-800 mb-1">
                          {order.title}
                        </h2>
                        <p className="text-sm text-indigo-600 mb-2">
                          Order #{order.id}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "In Transit"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-indigo-700 mb-3">{order.description}</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-sm text-indigo-600">
                          Ordered: {order.date}
                        </p>
                        <p className="text-sm text-indigo-600">
                          {order.status === "Delivered"
                            ? `Delivered: ${order.deliveredTime}`
                            : order.status === "In Transit"
                            ? `Estimated Delivery: ${order.deliveredTime}`
                            : "Processing"}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-indigo-800">
                        ${order.price.toFixed(2)}
                      </span>
                    </div>
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
}
