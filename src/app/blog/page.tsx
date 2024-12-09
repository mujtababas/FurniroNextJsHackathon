import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogPostSection from '@/components/BlogPostSection'
import BlogPostLayout from '@/components/BlogPostLayout'
import BlogPost from '@/components/BlogPost'
import Feature from '@/components/Feature'

function Blog() {
  return (
    <>
    <Navbar />
    <div>
      <section className="relative h-80 border-2 border-yellow-400">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Rectangle 1 (2).png')", // Replace with your image path
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/logomain.png" // Replace with your logo path
            alt="Logo"
            className="w-77px h-77px"
          />
          
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-black">Blog</h1>

        {/* Breadcrumb */}
        <p className="text-gray-700 mt-2">
          <a href="/" className="text-black hover:underline">
            Home
          </a>{" "}
          &gt; Blog
        </p>
      </div>
    </section>
    </div>
    
    <BlogPostSection />
    <BlogPostLayout />
    <BlogPost />
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
    <Feature />
            
    <Footer />

    </>
  )
}

export default Blog
