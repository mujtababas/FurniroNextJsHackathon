import React from "react";

const ImageCollage = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1200px] mx-auto space-y-6 py-6">
      {/* Text Section */}
      <div className="text-center text-gray-800">
        <p className="text-xl font-medium">
          Share your setup with{" "}
          <span className="text-2xl font-bold">#FuniroFurniture</span>
        </p>
      </div>

      {/* Image Collage */}
      <div className="grid grid-cols-8 grid-rows-4 gap-2 w-full h-[500px]">
        {/* Large Desk Setup */}
        <div className="col-span-4 row-span-3">
          <img
            src="/desk-setup.png"
            alt="Desk Setup"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Dining Area */}
        <div className="col-span-2 row-span-2">
          <img
            src="/dining-area.png"
            alt="Dining Area"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bedroom */}
        <div className="col-span-2 row-span-2">
          <img
            src="/bdroom.png"
            alt="Bedroom"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Chair */}
        <div className="col-span-2 row-span-2">
          <img
            src="/chair.png"
            alt="Chair"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Decorative Table */}
        <div className="col-span-2 row-span-1">
          <img
            src="/decorative-table.png"
            alt="Decorative Table"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Wall Art */}
        <div className="col-span-2 row-span-1">
          <img
            src="/wall-art.png"
            alt="Wall Art"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Living Room */}
        <div className="col-span-2 row-span-1">
          <img
            src="/living-room.png"
            alt="Living Room"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Kitchen */}
        <div className="col-span-2 row-span-1">
          <img
            src="/kitchen.png"
            alt="Kitchen"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
