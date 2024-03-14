import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProducts from "./SingleProducts";
import { Carts } from "../Context";

faker.seed(100);

const Home = () => {
  const { cart, setCart } = useContext(Carts);
  const ProductArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  console.log(useContext(Carts));

  const [products] = useState(ProductArray);
  console.log(cart);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProducts {...{ prod }} />
      ))}
    </div>
  );
};

export default Home;
