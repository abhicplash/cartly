import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaHeart, FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Topbar from "../Topbar/Topbar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "aws-amplify/auth";

const Navbar = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

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
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
              <span className="cart-text">Cart</span>
            </button>
          </Link>

          {/* User button with dropdown */}
          <div className="user-dropdown">
            <button className="icon-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FaUser />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {user ? (
                  <>
                    {/* <p className="dropdown-email">{user.username}</p> */}
                    <button onClick={handleSignOut} className="dropdown-item">
                      Logout
                    </button>
                  </>
                ) : (
                  <button onClick={() => navigate("/login")} className="dropdown-item">
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;