import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteCart,
  getCart,
  updateCart,
} from "../Thunks/cart-thunk";

const initialState = {
  cartItems: [],
  status: "idle",
  error: "",
};

export const cart = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        const { payload } = action;
        state.cartItems = payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("cart Added : ", action.payload);
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        console.log("Cart updated:", action.payload);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        console.log("Cart deleted:", action.payload);
      });
  },
});
