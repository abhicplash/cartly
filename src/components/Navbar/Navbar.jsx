import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaHeart, FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Topbar from "../Topbar/Topbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Topbar />
      <nav className="navbar">
        <div className="nav-left">
          <FaBars className="menu-icon" onClick={() => setOpen(!open)} />

          <ul className={`nav-links ${open ? "active" : ""}`}>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/products"}>
              <li>Collections</li>
            </Link>
          </ul>
        </div>

        <div className="nav-right">
          <Link to="/wishlist">
            <button className="icon-btn">
              <FaHeart />
            </button>
          </Link>
          <Link to="/cart">
            <button className="cart-btn">
              <FiShoppingBag />
              <span className="cart-text">Cart</span>
            </button>
          </Link>

          <button className="icon-btn">
            <FaUser />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
