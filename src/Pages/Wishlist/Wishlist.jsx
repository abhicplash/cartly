import React from "react";
import Layout from "../../components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { toggleWishlist } from "../../redux/wishlistSlice";
import { addTocart } from "../../redux/cartSlice";
import "./Wishlist.css";

const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishlist.wishList);
  const dispatch = useDispatch();

  return (
    <>
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1>My Wishlist</h1>
          <span>{wishListItems.length} Items</span>
        </div>

        {wishListItems.length === 0 ? (
          <div className="empty-state">
            <h2>Your wishlist is empty</h2>
            <p>Add products you love to see them here.</p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishListItems.map((item) => (
              <div className="wishlist-card" key={item.id}>
                <div className="wishlist-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="wishlist-info">
                  <h3>{item.title}</h3>
                  <p className="price">${item.price}</p>

                  <div className="wishlist-actions">
                    <button
                      className="move-cart"
                      onClick={() => dispatch(addTocart(item))}
                    >
                      Move to Cart
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(toggleWishlist(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
