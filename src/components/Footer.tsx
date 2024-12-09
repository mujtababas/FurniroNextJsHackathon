import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Funiro.</h2>
          <address className="text-gray-600 leading-relaxed">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Links</h3>
          <ul className="space-y-3">
            <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="/Shop" className="text-gray-600 hover:text-gray-900">Shop</a></li>
            <li><a href="/About" className="text-gray-600 hover:text-gray-900">About</a></li>
            <li><a href="/Contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Help</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Payment Options</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Newsletter</h3>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white text-sm font-semibold py-2 px-6 rounded hover:bg-gray-800 transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-600 text-sm border-t pt-6">
      <p>  
          Build by{" "}  
          <a href="https://next-js-portfolio-wine-mu.vercel.app/"   
             className="text-gray-900 hover:text-gray-700"  
             target="_blank"   
             rel="noopener noreferrer">  
            Syed Mujtaba Abbas  
          </a>  
        </p>
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
