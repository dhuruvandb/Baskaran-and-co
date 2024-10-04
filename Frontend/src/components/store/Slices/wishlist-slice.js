import { createSlice } from "@reduxjs/toolkit";
import { addWishList, getWishList } from "../Thunks/wishlist-thunk";

const initialState = {
  status: "",
  items: [],
};

export const wishlist = createSlice({
  initialState,
  name: "wishlist",
  extraReducers: (builder) => {
    builder
      .addCase(addWishList.fulfilled, (state) => {
        state.status = "successful";
      })
      .addCase(getWishList.fulfilled, (state, action) => {
        const { payload } = action;

        state.items = payload;
      });
  },
});
