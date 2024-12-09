
import { MapPin, Phone, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Feature from '@/components/Feature';
import Footer from '@/components/Footer';
import Image from 'next/image';


const Contact = () => {
  return (
    <>
    <Navbar />
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
          
          <h1 className="relative text-4xl font-bold text-black">Contact</h1>
          <p className="relative mt-2 text-black">Home {'>'} Contact</p>
        </div>
    <div className="min-h-screen flex flex-col items-center bg-[#FAF7F2] py-12 px-4">
      {/* Header */}
      
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h2>
        <p className="text-gray-600">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
        {/* Contact Info */}
        <div className="bg-white p-6 shadow-md rounded-lg flex-1">
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#B88E2F]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#B88E2F]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  Mobile: (+84) 546-6789
                  <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#B88E2F]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Working Time</h4>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-md rounded-lg flex-1">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Your name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Hi! I’d like to ask about..."
                className="w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-3 rounded-md font-semibold hover:bg-[#9e791f] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Feature />
    <Footer />
    </>
  );
};

export default Contact;
