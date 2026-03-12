import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <ProductDetails />
      </Layout>
    </div>
  );
};

export default Home;
