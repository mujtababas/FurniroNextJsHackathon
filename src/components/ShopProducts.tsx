"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FilterIcon, GridIcon, ListIcon, User } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/image 1 (1).png',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/leviosa.png',
  },
  {
    id: 3,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/image 1 (1).png',
  
  },
  {
    id: 4,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/leviosa.png',
  },
  {
    id: 5,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    image: '/lolito.png',

  },
  {
    id: 6,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    image: '/respira.png',
 
  },
  {
    id: 7,
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    image: '/grifo.png',
  },
  {
    id: 8,
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    image: '/muggo.png',
   
  },
  {
    id: 9,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    image: '/pingky.png',
   
  },
  {
    id: 10,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    image: '/potty.png',
  
  },
];

const ShopProducts = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="relative w-full h-[316px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('/bg.jpeg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <h1 className="relative text-4xl font-bold text-white">Shop</h1>
        <p className="relative mt-2 text-gray-300">Home {'>'} Shop</p>
      </div>




     {/* Filter Bar */}
<div className="flex justify-between items-center py-3 px-6 bg-[#FAF7F2] border border-[#E6E6E6] rounded-md">
  {/* Left Section: Filters */}
  <div className="flex items-center gap-6">
    <button className="flex items-center gap-2 text-gray-700">
      <FilterIcon className="w-5 h-5" /> {/* Replace with your filter icon */}
      Filter
    </button>
    <button className="flex items-center gap-2 text-gray-700">
      <GridIcon className="w-5 h-5" /> {/* Replace with grid icon */}
    </button>
    <button className="flex items-center gap-2 text-gray-700">
      <ListIcon className="w-5 h-5" /> {/* Replace with list icon */}
    </button>
    <p className="text-gray-600 text-sm">Showing 1–16 of 32 results</p>
  </div>

  {/* Right Section: Sort and Show Options */}
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2">
      <label htmlFor="show" className="text-gray-600 text-sm">Show</label>
      <input
        id="show"
        type="number"
        value={16}
        className="w-12 h-8 text-center border border-gray-300 rounded-md text-gray-700 bg-white"
      />
    </div>
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-gray-600 text-sm">Sort by</label>
      <select
        id="sort"
        className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#B88E2F]"
      >
        <option value="default">Default</option>
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  </div>
</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative w-full h-[300px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="w-[202px] h-[48px] bg-white text-[#B88E2F] font-semibold rounded mb-4 hover:bg-[#F2F2F2] transition-colors">
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="mt-2 font-semibold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B88E2F] text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopProducts;