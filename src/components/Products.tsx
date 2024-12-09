import React from 'react';
import { Share2, Heart, ArrowLeftRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  label?: {
    text: string;
    type: 'discount' | 'new';
  };
}

const products: Product[] = [
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    image: '/image 1 (1).png',
    label: { text: '-30%', type: 'discount' },
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
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    image: '/lolito.png',
    label: { text: '-50%', type: 'discount' },
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    image: '/respira.png',
    label: { text: 'New', type: 'new' },
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    image: '/grifo.png',
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    image: '/muggo.png',
    label: { text: 'New', type: 'new' },
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    originalPrice: 14000000,
    image: '/pingky.png',
    label: { text: '-50%', type: 'discount' },
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    image: '/potty.png',
    label: { text: 'New', type: 'new' },
  },
];

const Products = () => {
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <section className="py-8 px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image Container */}
            <div className="relative w-[305px] h-[446px] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center "
              />

              {/* Label */}
              {product.label && (
                <span
                  className={`w-[48px] h-[48px] absolute top-4 right-4 text-sm text-white rounded-full flex items-center justify-center
                  ${
                    product.label.type === 'discount'
                      ? 'bg-red-500'
                      : 'bg-emerald-500'
                  }`}
                >
                  {product.label.text}
                </span>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <button className="w-[202px] h-[48px] bg-white text-[#B88E2F] font-semibold rounded mb-4 hover:bg-[#F2F2F2] transition-colors">
                  Add to cart
                </button>
                <div className="flex gap-4 text-white">
                  <button className="flex items-center gap-2 hover:text-[#B88E2F]">
                    <Share2 /> Share
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#B88E2F]">
                    <ArrowLeftRight /> Compare
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#B88E2F]">
                    <Heart /> Like
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-red-500 line-through text-sm">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

          </div>
        ))}

        {/* Button */}
        <button
            className="ml-[177%] mt-[52px] w-[245px] h-[48px] text-[#B88E2F] border border-[#B88E2F] bg-white rounded-sm font-medium text-center hover:bg-[#FDF5E6] transition-colors items-center"
            >
            Show More
            </button>

      </div>
    </section>
  );
};

export default Products;
