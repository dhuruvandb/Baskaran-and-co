import { createSlice } from "@reduxjs/toolkit";
import { getCart } from "../Thunks/cart-thunk";

const initialState = {
  cartItems: [],
  status: "idle",
  error: "",
};

export const cart = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      const { payload } = action;
      state.cartItems = payload;
    });
  },
});
