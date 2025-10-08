"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "@/store/cart-store";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();
  const activeLink = (path: string) => {
    return pathname === path
      ? "text-black font-bold transition-colors duration-200"
      : "text-gray-500 hover:text-gray-600 transition-colors duration-200";
  };

  // cart count when a product is addeded
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = (
    <>
      <Link href="/" className={activeLink("/")} onClick={toggleMobileMenu}>
        Home
      </Link>
      <Link
        href="/products"
        className={activeLink("/products")}
        onClick={toggleMobileMenu}
      >
        Products
      </Link>
      <Link
        href="/checkout"
        className={activeLink("/checkout")}
        onClick={toggleMobileMenu}
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
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <HiOutlineX size={28} aria-hidden="true" />
            ) : (
              <HiMenuAlt3 size={28} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col items-center space-y-4 font-raleway font-medium">
              {navLinks}
            </div>
          </div>
        )}

        {/* Cart for Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-black font-sans">
          <Link href="/checkout" className="relative">
            <FaCartShopping size={24} />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-poppins font-semibold 
              rounded-full w-5 h-5 flex items-center justify-center shadow-md"
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
