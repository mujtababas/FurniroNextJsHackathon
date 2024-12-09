"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Feature from '@/components/Feature';
import Image from 'next/image';
import { Trash } from 'lucide-react';  

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCart: Product[] = [
    {
        id: 1,
        name: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        image: '/image 1 (1).png',
        quantity: 1,
      },
      {
        id: 2,
        name: 'Leviosa',
        description: 'Stylish cafe chair',
        price: 2500000,
        image: '/leviosa.png',
         quantity: 1,
      },
      {
        id: 3,
        name: 'Syltherine',
        description: 'Stylish cafe chair',
        price: 2500000,
        image: '/image 1 (1).png',
         quantity: 1,
      
      },
      {
        id: 4,
        name: 'Leviosa',
        description: 'Stylish cafe chair',
        price: 2500000,
        image: '/leviosa.png',
         quantity: 1,
      },
      {
        id: 5,
        name: 'Lolito',
        description: 'Luxury big sofa',
        price: 7000000,
        image: '/lolito.png',
         quantity: 1,
    
      },
      {
        id: 6,
        name: 'Respira',
        description: 'Outdoor bar table and stool',
        price: 500000,
        image: '/respira.png',
         quantity: 1,
     
      },
      {
        id: 7,
        name: 'Grifo',
        description: 'Night lamp',
        price: 1500000,
        image: '/grifo.png',
         quantity: 1,
      },
      {
        id: 8,
        name: 'Muggo',
        description: 'Small mug',
        price: 150000,
        image: '/muggo.png',
         quantity: 1,
       
      },
      {
        id: 9,
        name: 'Pingky',
        description: 'Cute bed set',
        price: 7000000,
        image: '/pingky.png',
         quantity: 1,
       
      },
      {
        id: 10,
        name: 'Potty',
        description: 'Minimalist flower pot',
        price: 500000,
        image: '/potty.png',
         quantity: 1,
      
      },
];

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>(initialCart);

  // Remove Item Handler
  const handleRemove = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="space-y-8">
        {/* Page Title */}
        <div
          className="relative w-full h-[316px] bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/bg.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#ffffffaf] opacity-50"></div>
          <Image
            src="/logomain.png"
            alt="Logo"
            width={50}
            height={32}
            className="-mt-4"
          />
          <h1 className="relative text-4xl font-bold text-black">Cart</h1>
          <p className="relative mt-2 text-black">Home {'>'} Cart</p>
        </div>

        {/* Cart Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Table */}
            <div className="w-full lg:w-2/3 bg-[#FAF7F2] p-6 rounded-lg shadow-md">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAF7F2] text-left text-sm text-gray-700">
                    <th className="p-4">Product</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Subtotal</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td className="p-4 flex items-center gap-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="rounded-md"
                        />
                        <span className="text-gray-700">{product.name}</span>
                      </td>
                      <td className="p-4 text-gray-700">
                        Rs. {product.price.toLocaleString('en-PK')}
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={product.quantity}
                          min={1}
                          className="w-12 h-8 text-center border border-gray-300 rounded-md"
                          readOnly
                        />
                      </td>
                      <td className="p-4 text-gray-700">
                        Rs. {(product.price * product.quantity).toLocaleString('en-PK')}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          className="text-[#B88E2F] hover:text-red-500 transition"
                          onClick={() => handleRemove(product.id)}
                          aria-label="Remove Item"
                        >
                          <Trash className="w-5 h-5" /> {/* Lucide Trash Icon */}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Totals */}
            <div className="w-full lg:w-1/3 bg-[#FAF7F2] p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-900">Cart Totals</h2>
              <div className="flex justify-between mt-4 text-gray-700">
                <span>Subtotal</span>
                <span>
                  Rs.{' '}
                  {cart
                    .reduce((total, product) => total + product.price * product.quantity, 0)
                    .toLocaleString('en-PK')}
                </span>
              </div>
              <div className="flex justify-between mt-2 text-gray-900 font-bold">
                <span>Total</span>
                <span className="text-[#B88E2F]">
                  Rs.{' '}
                  {cart
                    .reduce((total, product) => total + product.price * product.quantity, 0)
                    .toLocaleString('en-PK')}
                </span>
              </div>
              <button className="w-full mt-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-[#B88E2F] hover:text-white transition">
                Check Out
              </button>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <Feature />
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
