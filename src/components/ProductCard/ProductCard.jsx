import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/cartSlice";
import { toggleWishlist } from "../../redux/wishlistSlice";
// import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ handleClick, title, id, description, image, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleAddToCart = (product) => {
    console.log("Product added:", product);
    dispatch(addTocart(product));
    console.log(cartItems);
  };
  const handleWishlist = (product) => {
    console.log("added to wish list");
    dispatch(toggleWishlist(product));
  };
  return (
    <div
      className="product-card"
      onClick={() => {
        handleClick(id);
      }}
    >
      <img src={image} alt={title} className="product-image" />
      <h4 className="product-title">{title}</h4>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button
        className="add-to-cart"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart({ id, title, price, image });
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleWishlist({ id, title, price, image });
        }}
      >
        Add to wishlist
      </button>
    </div>
  );
};

export default React.memo(ProductCard);
