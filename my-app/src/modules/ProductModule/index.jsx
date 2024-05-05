import { product } from "@/app/data/product";
import React from "react";
import ProductCard from "./ProductCard";

const ProductModule = () => {
  return (
    <div>
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
  );
};

export default ProductModule;
