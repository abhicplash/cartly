// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const [singleProductData, setSingleProductData] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getSingleProductDetails();
//   }, []);

//   const getSingleProductDetails = () => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setSingleProductData(data);
//         setLoading(false);
//       });
//   };
//   if (loading) return <h2>Loading</h2>;
//   return (
//     <div>
//       <h1>
//         {console.log(singleProductData)}
//         {singleProductData.title}
//       </h1>
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import Layout from "../../components/Layout/Layout";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleProductDetails();
  }, [id]);

  const getSingleProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProductData(data);
        setLoading(false);
      });
  };

  if (loading) return <h2 className="loading">Loading...</h2>;

  return (
    <Layout>
      <div className="product-page">

      <div className="product-container">

        <div className="product-image-card">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
          />
        </div>

        <div className="product-details">

          <h1>{singleProductData.title}</h1>

          <p className="price">${singleProductData.price}</p>

          <p className="desc">{singleProductData.description}</p>

          <div className="product-buttons">

            <button className="cart-btn">
              Add to Cart
            </button>

            <button className="wishlist-btn">
              ❤️ Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
    </Layout>
  );
};

export default SingleProduct;
