import React from "react";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishlist.wishList);
  return (
    <Layout>
      <div>{wishListItems.length}</div>
    </Layout>
  );
};

export default Wishlist;
