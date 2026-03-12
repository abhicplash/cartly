import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleProductDetails();
  }, []);

  const getSingleProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProductData(data);
        setLoading(false);
      });
  };
  if (loading) return <h2>Loading</h2>;
  return (
    <div>
      <h1>
        {console.log(singleProductData)}
        {singleProductData.title}
      </h1>
    </div>
  );
};

export default SingleProduct;
