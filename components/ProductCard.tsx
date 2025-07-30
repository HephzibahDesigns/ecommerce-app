import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface props {
  product: Stripe.Product;
}

const ProductCard = ({ product }: props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
        {product.images && product.images[0] && (
          <div className="relative h-80 w-full flex justify-center items-center">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={50}
              className=" object-cover group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}

        <CardHeader className="p-4">
          <CardTitle className="text-lg font-bold font-poppins text-gray-800">
            {product.name && product.name.length > 50
              ? `${product.name?.slice(0, 70)}...`
              : product.name}
          </CardTitle>
          <CardContent className="p-2 grow flex flex-col justify-start h-full">
            <p className="flex justify-center items-center flex-wrap text-gray-600 text-sm mb-2">
              {product.description && product.description?.length > 200
                ? `${product.description?.slice(0, 200)}....`
                : product.description}
            </p>
            {price && price.unit_amount && (
              <p className="text-lg font-semibold  text-gray-900">
                ₦{(price.unit_amount / 100).toFixed(2)}
              </p>
            )}

            <Button className="mt-4 cursor-pointer">View Details</Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCard;
