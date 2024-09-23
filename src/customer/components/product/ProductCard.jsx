import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  // console.log("productcard", product)
  const handleClick = () => {
    console.log(`Navigating to /product/${product._id}`);
    navigate(`/product/${product?._id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="ProductCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageurl} // Fixed case for `imageurl`
          alt={product.title}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">
          ₹{product.discountedprice || product.price}
          </p>
          {product.discountedprice && (
            <>
              <p className="line-through opacity-50">${product.price}</p>
              <p className="text-green-600 font-semibold">
                {product.discountpercent}% off
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
