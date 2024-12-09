import React, { useState } from "react";
import {
  ChevronRight,
  Edit2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import art from "../image/art.png";
import UserHeader from "../Header/UserHeader";
import Footer from "../Footer";

const product = {
  name: "Abstract Painting",
  artist: "Jane Doe",
  price: 450,
  description: "A beautiful abstract painting by Jane Doe.",
  image: art,
};

export default function Buy() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    landmark: "",
    pincode: "",
    alternateMobile: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [quantity, setQuantity] = useState(1);

  const totalProductPrice = product.price * quantity;
  const deliveryCharge = totalProductPrice < 500 ? 50 : 0;
  const totalPrice = totalProductPrice + deliveryCharge;

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (quantity === 0) return;
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (quantity === 0) return;
    setStep(3);
  };

  const handleConfirmOrder = () => {
    setStep(4);
  };

  const handleChangeAddress = () => setStep(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <UserHeader />
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-12">
            Complete Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Order
            </span>
          </h1>

          <div className="flex items-center justify-between mb-12 bg-white rounded-full p-2 shadow-lg px-4">
            {["Address", "Payment", "Confirm", "Complete"].map(
              (item, index) => (
                <div key={item} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step > index + 1
                        ? "bg-green-500"
                        : step === index + 1
                        ? "bg-purple-600"
                        : "bg-gray-200"
                    } text-white font-bold text-lg transition-all duration-300 ease-in-out`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`ml-2 ${
                      step === index + 1
                        ? "text-purple-600 font-semibold"
                        : "text-gray-500"
                    } transition-all duration-300 ease-in-out`}
                  >
                    {item}
                  </span>
                  {index < 3 && <ChevronRight className="mx-2 text-gray-400" />}
                </div>
              )
            )}
          </div>

          <div className="mb-12 transition-all duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold mb-6 text-purple-800">
                    Delivery Details
                  </h2>
                  <form
                    onSubmit={handleAddressSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={address.name}
                        onChange={(e) =>
                          setAddress({ ...address, name: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={address.email}
                        onChange={(e) =>
                          setAddress({ ...address, email: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="mobile"
                        type="tel"
                        value={address.mobile}
                        onChange={(e) =>
                          setAddress({ ...address, mobile: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pincode"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Pincode
                      </label>
                      <input
                        id="pincode"
                        type="text"
                        value={address.pincode}
                        onChange={(e) =>
                          setAddress({ ...address, pincode: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Address
                      </label>
                      <textarea
                        id="address"
                        value={address.address}
                        onChange={(e) =>
                          setAddress({ ...address, address: e.target.value })
                        }
                        required
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="landmark"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Landmark (Optional)
                      </label>
                      <input
                        id="landmark"
                        value={address.landmark}
                        onChange={(e) =>
                          setAddress({ ...address, landmark: e.target.value })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="alternateMobile"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Alternate Mobile (Optional)
                      </label>
                      <input
                        id="alternateMobile"
                        type="tel"
                        value={address.alternateMobile}
                        onChange={(e) =>
                          setAddress({
                            ...address,
                            alternateMobile: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6 text-purple-800">
                    Payment Details
                  </h2>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl shadow-lg relative">
                    <h3 className="font-semibold text-xl text-purple-700 mb-4">
                      Delivery Address
                    </h3>
                    <p className="text-gray-700">{address.name}</p>
                    <p className="text-gray-700">{address.email}</p>
                    <p className="text-gray-700">{address.mobile}</p>
                    <p className="text-gray-700">{address.address}</p>
                    <p className="text-gray-700">{address.landmark}</p>
                    <p className="text-gray-700">{address.pincode}</p>
                    <p className="text-gray-700">
                      {address.alternateMobile || "No alternate number"}
                    </p>
                    <button
                      onClick={handleChangeAddress}
                      className="absolute top-4 right-4 text-purple-600 font-semibold flex items-center"
                    >
                      <Edit2 size={16} className="mr-2" /> Edit
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-red-100 p-6 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-xl text-pink-700 mb-4">
                      Product Details
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={128}
                        height={128}
                        className="rounded-md mr-6 shadow-md"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 mb-2">
                          by {product.artist}
                        </p>
                        <p className="text-gray-700 mb-4">
                          {product.description}
                        </p>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={decreaseQuantity}
                            disabled={quantity <= 1}
                            className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          >
                            <Minus size={20} />
                          </button>
                          <span className="text-2xl font-semibold text-gray-800">
                            {quantity}
                          </span>
                          <button
                            onClick={increaseQuantity}
                            className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                          >
                            <Plus size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-xl text-green-700 mb-4">
                      Payment Summary
                    </h3>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Product Price:</span>
                        <span className="font-semibold text-gray-800">
                          ${totalProductPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Delivery Charge:</span>
                        <span className="font-semibold text-gray-800">
                          ${deliveryCharge.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-xl mt-4 pt-4 border-t border-green-200">
                        <span className="font-bold text-gray-800">Total:</span>
                        <span className="font-bold text-green-600">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl text-gray-800 mb-4">
                      Select Payment Method
                    </h3>
                    {["Credit Card", "PayPal", "Cash on Delivery"].map(
                      (method) => (
                        <label
                          key={method}
                          className="flex items-center p-4 border rounded-lg cursor-pointer transition duration-300 hover:bg-gray-50"
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method}
                            checked={paymentMethod === method}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="form-radio h-5 w-5 text-purple-600"
                          />
                          <span className="ml-2 text-gray-700">{method}</span>
                        </label>
                      )
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <ArrowLeft className="mr-2" size={16} />
                      Back
                    </button>
                    <button
                      onClick={handlePaymentSubmit}
                      className="flex-grow ml-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      Proceed to Confirmation
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6 text-purple-800">
                    Order Confirmation
                  </h2>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-xl text-purple-700 mb-4">
                      Delivery Address
                    </h3>
                    <p className="text-gray-700">{address.name}</p>
                    <p className="text-gray-700">{address.address}</p>
                    <p className="text-gray-700">{address.pincode}</p>
                    <p className="text-gray-700">{address.mobile}</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-red-100 p-6 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-xl text-pink-700 mb-4">
                      Product Details
                    </h3>
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={96}
                        height={96}
                        className="rounded-md mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {product.name}
                        </h4>
                        <p className="text-gray-600">Quantity: {quantity}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-xl text-green-700 mb-4">
                      Payment Summary
                    </h3>
                    <div className="space-y-2 text-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Product Price:</span>
                        <span className="font-semibold text-gray-800">
                          ${totalProductPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Delivery Charge:</span>
                        <span className="font-semibold text-gray-800">
                          ${deliveryCharge.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-xl mt-4 pt-4 border-t border-green-200">
                        <span className="font-bold text-gray-800">Total:</span>
                        <span className="font-bold text-green-600">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-xl shadow-lg">
                    <h3 className="font-semibold text-xl text-yellow-700 mb-4">
                      Payment Method
                    </h3>
                    <p className="text-gray-800 font-semibold">
                      {paymentMethod}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={() => setStep(2)}
                      className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <ArrowLeft className="mr-2" size={16} />
                      Back
                    </button>
                    <button
                      onClick={handleConfirmOrder}
                      className="flex-grow ml-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <ShoppingBag className="mr-2 inline" size={20} />
                      Confirm and Place Order
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8 bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl shadow-lg">
                  <div className="text-center">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h2 className="text-3xl font-bold mb-2 text-green-800">
                      Order Confirmed!
                    </h2>
                    <p className="text-lg text-green-700">
                      Thank you for your purchase. Your order has been
                      successfully placed.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-xl text-green-700 mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <strong>Order Number:</strong> #ORD-
                        {Math.floor(Math.random() * 1000000)}
                      </p>
                      <p>
                        <strong>Total Amount:</strong> ${totalPrice.toFixed(2)}
                      </p>
                      <p>
                        <strong>Estimated Delivery:</strong>{" "}
                        {new Date(
                          Date.now() + 7 * 24 * 60 * 60 * 1000
                        ).toDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
