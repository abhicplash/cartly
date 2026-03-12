import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="banner-inner">

        <div className="banner-content">
          <span className="tagline">Premium Shopping Experience</span>

          <h1>
            Discover Products
            <br />
            Designed for Modern Living
          </h1>

          <p>
            Explore a curated collection of high-quality products.
            Simple, elegant, and crafted for everyday life.
          </p>

          <div className="banner-buttons">
            <button className="primary-btn">Shop Collection</button>
            <button className="secondary-btn">Explore</button>
          </div>
        </div>

        <div className="banner-visual">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="product"
          />
        </div>

      </div>
    </section>
  );
};

export default HomeBanner;