import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Cartly</h2>
          <p>Your smart shopping destination.</p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li>All Products</li>
            <li>Categories</li>
            <li>Wishlist</li>
            <li>Cart</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get offers and product updates.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cartly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
