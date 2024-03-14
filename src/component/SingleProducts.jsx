import React, { useContext, useState } from "react";
import { Carts } from "../Context";

const SingleProducts = ({ prod }) => {
  const { cart, setCart } = useContext(Carts);
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove Items
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProducts;
