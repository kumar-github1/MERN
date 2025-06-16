import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {cartItems.map((item, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={item.image} alt={item.model} />
              </figure>
              <div className="card-body bg-green-600">
                <h2 className="card-title">
                  {item.brand} {item.model}
                </h2>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
