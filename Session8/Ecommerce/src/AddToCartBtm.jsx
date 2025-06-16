import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function AddToCartBtm({ product }) {
  const { addToCart } = useContext(CartContext);
  const [value, setValue] = useState(0);

  const inc = () => {
    setValue(value + 1);
  };

  const dec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleAddToCart = () => {
    if (value > 0) {
      // Add the product with the selected quantity to the cart
      addToCart({ ...product, quantity: value });
      setValue(0); // Reset the quantity after adding to cart
    }
  };

  return (
    <div>
      {value > 0 ? (
        <div>
          <button
            className="bg-blue-700 text-black p-3 rounded-tl-md rounded-bl-md active:scale-90"
            onClick={inc}
          >
            Increment
          </button>
          <button className="bg-white text-black p-3 ">{value}</button>
          <button
            className="bg-blue-700 text-black p-3 rounded-tr-md rounded-br-md active:scale-90"
            onClick={dec}
          >
            Decrement
          </button>
          <button
            className="bg-blue-700 text-black p-3 rounded-md active:scale-90"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-700 text-black p-3 rounded-md active:scale-90"
          onClick={inc}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
