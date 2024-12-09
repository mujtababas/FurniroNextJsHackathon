import React from "react";

const Banner: React.FC = () => {
  return (
    <section
      className="flex justify-center items-center h-screen bg-[url('/main.jpeg')] bg-cover bg-center"
    >
      {/* Content Box */}
      <div className="w-[643px] h-[443px]  ml-[50%] bg-[#FFF3E3] p-8 rounded-lg shadow-lg">
        <p className="text-sm mt-[30px] font-light text-black mb-2">New Arrival</p>
        <h1 className="text-4xl font-extrabold text-[#B88E2F] leading-tight mb-4">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-base text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="w-[200px] h-[60px] bg-[#B88E2F] mt-[75px] text-white font-semibold rounded shadow hover:bg-yellow-600 transition-all">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
