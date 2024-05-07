"use client";
import { product } from "@/app/data/product";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductModule = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <div>
      <div>Cart: {cartItems?.length}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 justify-items-center">
        {product?.map((i, idx) => {
          return (
            <ProductCard
              key={i?.id}
              image={i?.image}
              title={i?.title}
              price={i?.price}
              description={i?.description}
              category={i?.category}
              rate={i?.rating.rate}
              count={i?.rating.count}
              setCartItems={setCartItems}
              i={i}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 justify-items-center">
        <h2>Cart </h2>
        {cartItems?.map((i, idx) => {
          return (
            <ProductCard
              key={i?.id}
              image={i?.image}
              title={i?.title}
              price={i?.price}
              description={i?.description}
              category={i?.category}
              rate={i?.rating.rate}
              count={i?.rating.count}
              setCartItems={setCartItems}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductModule;
