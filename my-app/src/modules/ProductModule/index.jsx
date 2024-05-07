"use client";
import { product } from "@/app/data/product";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductModule = () => {
  return (
    <div>
      <div>Cart: {ProductCard?.cartCount}</div>
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductModule;
