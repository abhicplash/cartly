// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});
