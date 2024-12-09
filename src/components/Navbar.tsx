"use client"
import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-md bg-white">
      {/* Logo and Icon */}
      <div className="flex items-center space-x-3">
        {/* Icon before logo */}
        <Image
          src="/Logomain.png"
          alt="Logo Icon"
          width={50}
          height={32}
          className="m-3"
        />
        {/* Logo */}
        <p className="font-bold text-2xl text-black">Furniro</p>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li>
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Shop" className="hover:text-yellow-500">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-yellow-500">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Desktop Icons */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        <Link href="/account">
          <Image
            src="/user.png"
            alt="Account"
            width={24}
            height={24}
            className="hover:opacity-70"
          />
        </Link>
        <Link href="/search">
          <Image
            src="/search-icon.png"
            alt="Search"
            width={24}
            height={24}
            className="hover:opacity-70"
          />
        </Link>
        <Link href="/wishlist">
          <Image
            src="/heart.png"
            alt="Wishlist"
            width={24}
            height={24}
            className="hover:opacity-70"
          />
        </Link>
        <Link href="/Cart">
          <Image
            src="/cart.png"
            alt="Cart"
            width={24}
            height={24}
            className="hover:opacity-70"
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden block focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // Close Icon
          <span className="text-2xl font-bold text-gray-700">&times;</span> // "×" symbol for close
        ) : (
          // Hamburger Menu Icon
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </div>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-7 p-6 text-black">
            <li>
              <Link href="/" className="text-base font-medium text-black hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-base font-medium text-black hover:text-yellow-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-base font-medium text-black hover:text-yellow-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-base font-medium text-black hover:text-yellow-500">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-6 text-gray-700 p-4">
            <Link href="/account">
              <Image
                src="/user.png"
                alt="Account"
                width={24}
                height={24}
                className="hover:opacity-70"
              />
            </Link>
            <Link href="/search">
              <Image
                src="/search-icon.png"
                alt="Search"
                width={24}
                height={24}
                className="hover:opacity-70"
              />
            </Link>
            <Link href="/wishlist">
              <Image
                src="/heart.png"
                alt="Wishlist"
                width={24}
                height={24}
                className="hover:opacity-70"
              />
            </Link>
            <Link href="/cart">
              <Image
                src="/cart.png"
                alt="Cart"
                width={24}
                height={24}
                className="hover:opacity-70"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
