import React, { useState } from "react";
import { Trash2, Gift, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UserHeader from "../Header/UserHeader";
import art from "../image/art.png";
import art1 from "../image/art1.png";
import art2 from "../image/art2.png";
import Footer from "../Footer";

export default function Cart() {
  const navigate = useNavigate();

  // Initialize cart with sample products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Echo Dot (5th Gen, 2022 release) | Smart speaker with Alexa",
      price: 49.99,
      image: art,
      quantity: 1,
    },
    {
      id: 2,
      name: "Fire TV Stick 4K streaming device with latest Alexa Voice Remote",
      price: 39.99,
      image: art1,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Kindle Paperwhite (8 GB) – Now with a 6.8" display and adjustable warm light',
      price: 139.99,
      image: art2,
      quantity: 1,
    },
  ]);

  // Update quantity of product
  const updateQuantity = (id, newQuantity) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, newQuantity) }
          : product
      )
    );
  };

  // Remove product from cart
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Calculate subtotal (product total)
  const productTotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const itemCount = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // Calculate delivery charges (if product total is less than ₹500)
  const deliveryCharges = productTotal < 500 ? 80 : 0;

  // Final amount including delivery charges
  const finalAmount = productTotal + deliveryCharges;

  // Handle navigation to checkout
  const handleCheckout = () => {
    navigate("/Buy"); // Redirect to /Buy page
  };

  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-6xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-3/4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Cart ({itemCount} items)
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Price</p>
                  </div>

                  {/* Map through the products */}
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="py-6 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-32 h-32 object-contain mr-6"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-900">
                            {product.name}
                          </h3>
                          <p className="text-sm text-green-600 mt-1">
                            In Stock
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Eligible for FREE Shipping
                          </p>

                          {/* Quantity Selector and Remove Button */}
                          <div className="flex items-center mt-2">
                            <select
                              value={product.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  product.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="block w-20 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                              {[...Array(10)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>

                            {/* Delete Button */}
                            <button
                              onClick={() => removeProduct(product.id)}
                              className="ml-4 flex items-center text-red-600 hover:text-red-800 font-semibold hover:underline transition duration-200 ease-in-out"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </button>
                          </div>
                        </div>

                        {/* Price Display */}
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotal */}
                <div className="bg-gray-50 px-6 py-4 text-right">
                  <p className="text-xl font-semibold text-gray-900">
                    Product Total:{" "}
                    <span className="text-red-600">${productTotal.toFixed(2)}</span>
                  </p>
                  <p className="text-lg text-gray-900">
                    Delivery Charges:{" "}
                    <span className={`text-${deliveryCharges > 0 ? "red" : "green"}-600`}>
                      ₹{deliveryCharges}
                    </span>
                  </p>
                  <p className="text-xl font-semibold text-gray-900">
                    Final Amount:{" "}
                    <span className="text-red-600">
                      ₹{finalAmount.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary and Checkout Button */}
            <div className="lg:w-1/4">
              <div className="bg-white shadow-md rounded-lg p-6">
                {/* Free Shipping Offer */}
                <div className="flex items-center text-green-600 mb-4">
                  <Gift className="w-6 h-6 mr-2" />
                  <span className="text-sm font-medium">
                    Your order qualifies for FREE Shipping
                  </span>
                </div>

                {/* Subtotal Display */}
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Subtotal ({itemCount} items):{" "}
                  <span className="text-red-600">${productTotal.toFixed(2)}</span>
                </p>
                <p className="text-lg text-gray-900 mb-4">
                  Delivery Charges:{" "}
                  <span className={`text-${deliveryCharges > 0 ? "red" : "green"}-600`}>
                    ₹{deliveryCharges}
                  </span>
                </p>
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  Final Amount:{" "}
                  <span className="text-red-600">
                    ₹{finalAmount.toFixed(2)}
                  </span>
                </p>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  Proceed to checkout
                </button>

                {/* Delivery Update */}
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <div className="flex items-center text-blue-700 mb-2">
                    <Truck className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Delivery Update</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We're working to ensure your package arrives on time. Track
                    your order for the most up-to-date delivery information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
