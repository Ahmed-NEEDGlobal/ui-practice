"use client";
import { useState } from "react";
import ProductModule from ".";
import { FaCartArrowDown } from "react-icons/fa6";
import Image from "next/image";

const ProductCard = ({
  i,
  image,
  title,
  price,
  description,
  category,
  rate,
  count,
  cartCount,
  setCartItems,
}) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartItems((prev) => [
      ...prev,
      { ...i, count: i?.count ? i?.count + 1 : 1 },
    ]);
  };

  return (
    <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 h-[520px] overflow-hidden rounded-lg">
      <div className="space-y-3">
        <figure className="flex justify-center h">
          <Image
            src={image}
            width={100}
            height={100}
            alt={title}
            className="h-56 w-64 object-contain"
          />
        </figure>
        <h1 className="font-semibold tracking-wide line-clamp-2 min-h-12">
          {title}
        </h1>
        <p className="font-light line-clamp-2 min-h-12">
          Description: {description}
        </p>
        <h4>Category: {category}</h4>
        <span>Rate: {rate} </span>
        <span>Count: {count}</span>
        <h4>{price}</h4>
        <div className="flex space-x-2">
          <button className="justify-center w-full flex flex-row items-center shadow-md font-semibold bg-indigo-600 text-white p-2 rounded-lg space-x-2">
            <FaCartArrowDown />
            <span>Buy Now</span>
          </button>
          <button
            onClick={handleSubmit}
            className="justify-center w-full flex flex-row items-center shadow-md font-semibold bg-indigo-600 text-white p-2 rounded-lg space-x-2"
          >
            <FaCartArrowDown />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
