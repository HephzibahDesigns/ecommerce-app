"use client";
import React, { useState } from "react";
import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface props {
  products: Stripe.Product[];
}

const ProductList = ({ products }: props) => {
  const [search, setSearch] = useState("");

  // filter products for search
  const filterProduct = products.filter((product) => {
    const term = search.toLowerCase();
    const searchNameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;

    return searchNameMatch || descriptionMatch;
  });

  return (
    <div>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Products..."
          className="w-full max-w-md rounded border border-b-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      {filterProduct.length > 0 ? (
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filterProduct.map((product, index) => {
            return (
              <li key={index}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center text-3xl font-raleway font-bold text-gray-400">
          Product Not found
        </p>
      )}
    </div>
  );
};

export default ProductList;
