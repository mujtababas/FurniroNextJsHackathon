"use client"
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">
            Home &gt; Shop &gt; <span className="text-gray-800">Asgaard Sofa</span>
          </p>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto mt-10 px-4 lg:flex lg:gap-8">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <Image
              src="/sofa.png"
              alt="Asgaard Sofa"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
          <div className="mt-4 flex space-x-4">
            <Image
              src="/sofa.png"
              alt="Sofa Thumbnail"
              width={80}
              height={80}
              className="border border-gray-200 rounded-md"
            />
            <Image
              src="/livingroom.png"
              alt="Living Room Thumbnail"
              width={80}
              height={80}
              className="border border-gray-200 rounded-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800">Asgaard Sofa</h2>
          <p className="text-xl text-orange-600 mt-2">Rs. 250,000.00</p>
          <div className="mt-4">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <p className="text-sm text-gray-600">5 Customer Reviews</p>
          </div>
          <p className="mt-6 text-gray-700">
            Setting the bar as one of the loudest speakers in the lineup, the
            Asgaard sofa offers a comfortable, sturdy design perfect for any
            living space.
          </p>
          <div className="mt-6 flex gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Size</p>
              <div className="flex space-x-2">
                <button className="border border-gray-200 py-1 px-3 rounded-lg text-sm">
                  L
                </button>
                <button className="border border-gray-200 py-1 px-3 rounded-lg text-sm">
                  XL
                </button>
                <button className="border border-gray-200 py-1 px-3 rounded-lg text-sm">
                  XS
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Color</p>
              <div className="flex space-x-2">
                <span className="w-6 h-6 bg-purple-600 rounded-full"></span>
                <span className="w-6 h-6 bg-black rounded-full"></span>
                <span className="w-6 h-6 bg-orange-500 rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600"
              onClick={() => setIsCartOpen(true)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="bg-white w-96 h-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-600 text-lg"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/sofa.png"
                  alt="Product Image"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-gray-800 font-medium">Asgaard Sofa</p>
                  <p className="text-sm text-gray-600">1 x Rs. 250,000.00</p>
                </div>
                <button className="text-gray-600">&times;</button>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/livingroom.png"
                  alt="Product Image"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <p className="text-gray-800 font-medium">Casaliving Wood</p>
                  <p className="text-sm text-gray-600">1 x Rs. 270,000.00</p>
                </div>
                <button className="text-gray-600">&times;</button>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-medium">Rs. 520,000.00</span>
              </div>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
                Checkout
              </button>
              <div className="mt-4 flex space-x-4">
                <button className="w-full border border-gray-300 py-3 rounded-lg">
                  Cart
                </button>
                <button className="w-full border border-gray-300 py-3 rounded-lg">
                  Comparison
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;
