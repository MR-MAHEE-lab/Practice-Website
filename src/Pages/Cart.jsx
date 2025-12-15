import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded mb-4"
        >
          <div>
            <h2 className="font-bold">{item.name}</h2>
            <p>${item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(item.id)} className="btn btn-sm">
              -
            </button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)} className="btn btn-sm">
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="btn btn-error btn-sm"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="text-right mt-6">
          <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
          <button className="btn btn-success mt-3">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
