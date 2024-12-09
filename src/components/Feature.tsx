import Image from "next/image";

const Feature = () => {
  return (
    <>
      {/* Features Section */}
      <div className="mt-12 bg-[#FDF7F2] h-[270px] py-8 px-6 rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* High Quality */}
          <div className="flex items-center gap-4">
            <Image
              src="/high.png"
              alt="High Quality"
              width={48}
              height={48}
            />
            <div>
              <h3 className="font-semibold text-base text-gray-900">High Quality</h3>
              <p className="text-gray-600 text-sm">crafted from top materials</p>
            </div>
          </div>

          {/* Warranty Protection */}
          <div className="flex items-center gap-4">
            <Image
              src="/warrenty.png"
              alt="Warranty Protection"
              width={48}
              height={48}
            />
            <div>
              <h3 className="font-semibold text-base text-gray-900">Warranty Protection</h3>
              <p className="text-gray-600 text-sm">Over 2 years</p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center gap-4">
            <Image
              src="/free.png"
              alt="Free Shipping"
              width={48}
              height={48}
            />
            <div>
              <h3 className="font-semibold text-base text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Order over 150 $</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center gap-4">
            <Image
              src="/24.png"
              alt="24/7 Support"
              width={48}
              height={48}
            />
            <div>
              <h3 className="font-semibold text-base text-gray-900">24 / 7 Support</h3>
              <p className="text-gray-600 text-sm">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
