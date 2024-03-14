import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Carts } from "../Context";

const Header = () => {
  const { cart } = useContext(Carts);
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">cart:{cart.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
