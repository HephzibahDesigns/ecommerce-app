"use client";
import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface props {
  product: Stripe.Product;
}

const ProductDetail = ({ product }: props) => {
  const price = product.default_price as Stripe.Price;
  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product.id);

  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.images && product.images[0] && (
        <div className="relative h-80 w-full flex justify-center items-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={50}
            className="object-cover group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
          />
        </div>
      )}

      <div className="md:w-10/12">
        <h1 className="text-2xl font-medium mb-4">{product.name}</h1>
        {product.description && (
          <p className="text-gray-800 mb-2">{product.description}</p>
        )}

        {price && price.unit_amount && (
          <p className="text-lg font-semibold py-4 text-gray-900">
            ₦
            {(price.unit_amount / 100).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        )}

        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={() => removeItem(product.id)}>
            -
          </Button>
          <span className="text-lg font-semibold"> {quantity} </span>
          <Button variant="default" onClick={onAddItem}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
