"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import React from "react";
import { checkoutAction } from "./checkout-action";

const CheckoutPage = () => {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  if (totalPrice === 0 || items.length === 0) {
    return (
      <div>
        <h1>Your Cart is Empty!</h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center font-poppins">
        Checkout
      </h1>
      <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-raleway font-semibold">
            Order Summary
          </CardTitle>
          <CardContent>
            <ul className="space-y-4">
              {items.map((item) => {
                const itemPrice = item.price / 100;
                const totalCart = itemPrice * item.quantity;

                const imageUrl = item?.imageUrl;
                return (
                  <li
                    key={item.id}
                    className="flex flex-col gap-2 border-b pb-9 "
                  >
                    <div className="flex justify-between items-center space-x-4">
                      {imageUrl && (
                        <div className="relative h-32 w-32 flex justify-center items-center overflow-hidden rounded-md">
                          <Image
                            src={imageUrl}
                            alt={item.name}
                            width={120}
                            height={120}
                            className="object-cover rounded-xl"
                          />
                        </div>
                      )}
                      <span className="font-medium font-raleway text-[16px] text-left">
                        {item.name}
                      </span>
                      <span className="font-medium font-poppins">
                        ₦
                        {totalCart.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => removeItem(item.id)}
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="default"
                        onClick={() => addItem({ ...item, quantity: 1 })}
                      >
                        +
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-2 text-lg font-poppins font-medium">
              Total : ₦{" "}
              {(totalPrice / 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
          </CardContent>
        </CardHeader>
      </Card>

      <form className="max-w-md mx-auto" action={checkoutAction}>
        <input type="hidden" name="items" value={JSON.stringify(items)} />

        <Button
          type="submit"
          variant="default"
          className="w-[300px] flex justify-center items-center mx-auto"
        >
          Proceed to Payment
        </Button>

        <Button
          onClick={clearCart}
          variant="default"
          className="w-[300px] flex justify-center items-center mx-auto mt-2"
        >
          Clear Cart
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
