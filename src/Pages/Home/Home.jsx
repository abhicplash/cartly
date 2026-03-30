import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import Layout from "../../components/Layout/Layout";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Categories from "../../components/Categories/Categories";
import FeatureHighlights from "../../components/FeatureHighlights/FeatureHighlights";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Categories />
      <FeatureHighlights/>
      <TrendingProducts/>
    </>
  );
};

export default Home;
