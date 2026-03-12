import React, { useEffect, useState } from "react";
import "./TrendingProducts.css";
import ProductCard from "../ProductCard/ProductCard";

const TrendingProducts = ({ handleClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTrendingProducts();
  }, []);

  const getTrendingProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    // take first 4 products
    setProducts(data.slice(0, 4));
  };

  return (
    <section className="trending">
      <h2 className="trending-title">Trending Products</h2>

      <div className="trending-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            handleClick={handleClick}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
