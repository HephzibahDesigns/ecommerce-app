"use client";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import React, { useEffect } from "react";

const Success = () => {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-[20px] font-semibold font-poppins ">
        Payment Sucessful! 🎊 🎉
      </h1>
      <p className="font-medium font-raleway text-[18px]">
        Thank you for your Purchase, Your order is been processed.
      </p>

      <Link href={"/products"} className=" text-blue-600 hover:underline">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;
