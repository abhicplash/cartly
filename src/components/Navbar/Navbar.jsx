import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/cart"}>
        <h4>cart</h4>
      </Link>
      <Link to={"/wishlist"}>
        <h4>Wishlist</h4>
      </Link>
      <h2>{cartItems.length}</h2>
    </div>
  );
};

export default Navbar;
