import React from 'react';

const BrowseRange = () => {
  const categories = [
    { name: 'Dining', image: '/dining.png' },
    { name: 'Living', image: '/living.png' },
    { name: 'Bedroom', image: '/bedroom.png' },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#333333]">Browse The Range</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.name}
            className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[29rem] object-cover"
            />
            <div className="text-center p-4">
              <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseRange;
