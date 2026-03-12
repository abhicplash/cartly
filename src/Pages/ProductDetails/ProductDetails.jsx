import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductDetails.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debounceText, setDebounceText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getPrductsDetails();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  const getPrductsDetails = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const FilteredData = useMemo(() => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(debounceText.toLowerCase()),
    );
  }, [products, debounceText]);

  const handleClick = useCallback(
    (id) => {
      navigate(`/products/${id}`);
    },
    [navigate],
  );

  if (loading) return <h2>loading</h2>;
  return (
    <Layout>
      <h1>{debounceText}</h1>

      <input type="text" value={search} onChange={handleSearch} />
      <br />
      <br />
      <br />
      <div className="product-wrapper">
        {FilteredData.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
            image={item.image}
            handleClick={handleClick}
          />
        ))}
      </div>
      {FilteredData.length === 0 && <h1>Not Found</h1>}
    </Layout>
  );
};

export default ProductDetails;
