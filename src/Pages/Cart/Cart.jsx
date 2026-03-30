import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../redux/cartSlice";
import Layout from "../../components/Layout/Layout";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        <div className="cart-grid">
          <div className="cart-items">
            {cartItems.length === 0 && (
              <p className="empty-cart">Your cart is empty</p>
            )}

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(increaseQty(item.id))}>
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <button className="checkout-btn">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
