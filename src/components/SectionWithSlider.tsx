"use client";
import React, { useState } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  number: string;
  type: string;
  title: string;
  images: string[];
}

const slides: SlideData[] = [
  {
    id: 1,
    number: "01",
    type: "Bed Room",
    title: "Inner Peace",
    images: ["/bedroom1.png", "/bedroom2.png"],
  },
  {
    id: 2,
    number: "02",
    type: "Living Room",
    title: "Modern Space",
    images: ["/living1.png", "/bedroom1.png"],
  },
  {
    id: 3,
    number: "03",
    type: "Kitchen",
    title: "Culinary Haven",
    images: ["/bedroom2.png", "/living1.png"],
  },
];

const SectionWithSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen bg-[#F9E4DF] flex items-center justify-center">
      {/* Content Area */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white px-8 py-3 rounded w-fit hover:bg-[#A07B2A] transition-colors">
            Explore More
          </button>
        </div>

        {/* Slider Area */}
        <div className="relative lg:w-1/2 h-[582px] flex items-center justify-center gap-8">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative transition-all duration-500 ${
                currentSlide === index ? "w-[404px] h-[582px]" : "w-[372px] h-[486px]"
              } group`}
            >
              <Image
                src={slide.images[0]}
                alt={`${slide.type} view`}
                fill
                className="object-cover rounded-md"
              />
              {/* Popup */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-white text-center px-4 py-2 bg-black bg-opacity-75 rounded-md">
                  <h3 className="text-xl font-bold">{slide.type}</h3>
                  <p>{slide.title}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-8 right-8 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#B88E2F]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWithSlider;
