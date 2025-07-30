"use client";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface props {
  products: Stripe.Product[];
}

const Carousel = ({ products }: props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    // clear interval to aviod leaks
    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct?.default_price as Stripe.Price;

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-b-gray-300">
      {currentProduct?.images && currentProduct?.images[0] && (
        <div className="relative h-96 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            priority
            fill
            objectFit="cover"
            quality={100}
            className="w-full h-full transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}

      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
        <CardTitle className="text-2xl text-white mb-2 font-semibold font-raleway w-[50%] text-center ">
          {currentProduct.name}
        </CardTitle>
        {price && price.unit_amount && (
          <p className=" text-xl text-white font-raleway font-normal ">
            ₦{(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default Carousel;
