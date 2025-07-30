import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-black font-bold text-2xl font-poppins">
          My Ecommerce
        </Link>

        <div className="hidden md:flex space-x-6 font-raleway font-medium">
          <Link href="/" className="text-black">
            Home
          </Link>
          <Link href="/products" className="text-black">
            Products
          </Link>
          <Link href="/checkout" className="text-black">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-black font-sans">
          {" "}
          My Cart
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
