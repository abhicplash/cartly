import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty } from "../../redux/cartSlice";
import Layout from "../../components/Layout/Layout";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log("cart items:", cartItems);
  const dispatch = useDispatch();

  return (
    <Layout>
      <h1>cart</h1>

      {cartItems.map((list) => (
        <div key={list.id}>
          {list.title} <br />
          <button
            onClick={() => {
              dispatch(decreaseQty(list.id));
            }}
          >
            -
          </button>
          <span>{list.quantity}</span>
          <button onClick={() => dispatch(increaseQty(list.id))}>+</button>
        </div>
      ))}
    </Layout>
  );
};

export default Cart;
