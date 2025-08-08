"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <Link
        href="/"
        className="text-black hover:text-gray-600 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        href="/products"
        className="text-black hover:text-gray-600 transition-colors duration-200"
      >
        Products
      </Link>
      <Link
        href="/checkout"
        className="text-black hover:text-gray-600 transition-colors duration-200"
      >
        Checkout
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Brand/Logo */}
        <Link href="/" className="text-black font-bold text-2xl font-poppins">
          My Ecommerce
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 font-raleway font-medium">
          {navLinks}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center space-x-4 text-black">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiMenuAlt3 size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col items-center space-y-4 font-raleway font-medium">
              {navLinks}

              <div className="flex md:flex items-center space-x-4 text-black font-raleway hover:text-gray-600 transition-colors duration-200">
                <span>My Cart</span>
              </div>
            </div>
          </div>
        )}

        {/* Cart for Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-black font-sans">
          <span>My Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
