import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishList: [] },
  reducers: {
    toggleWishlist: (state, action) => {
      const existingWishlist = state.wishList.find(
        (item) => item.id === action.payload.id,
      );

      if (!existingWishlist) {
        state.wishList.push(action.payload);
      } else {
        state.wishList = state.wishList.filter(
          (item) => item.id !== action.payload.id,
        );
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
