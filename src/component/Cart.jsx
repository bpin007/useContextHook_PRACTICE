import React, { useContext, useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";
import { Carts } from "../Context";
const Cart = () => {
  const { cart, setCart } = useContext(Carts);

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, curr) => {
        return acc + Number(curr.price);
      }, 0)
    );
  }, [cart]);
  console.log(totalPrice);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total:Rs.{totalPrice}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProducts prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
