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
  reducers: {
    addCart: (state, action) => {
      state.cartItems = state.cartItems.map((data) => {
        if (data._id === action) {
          data.cartValue = data.cartValue + 1;
        }
        return data;
      });
    },
    deleteFromCart: (state, action) => {},
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        const { payload } = action;
        state.cartItems = payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        // state.cartItems = state.cartItems.map((data) => {
        //   if (data._id === "66c8d4d59112cf429d9b49d7") {
        //     data.cartValue = data.cartValue + 1;
        //   }
        //   return data;
        // });
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        console.log("Cart updated:", action.payload);
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        console.log("Cart deleted:", action.payload);
        // delete state.items[action.payload]; // Remove from state if needed
      });
  },
});

export const { increment, addCart, getCartItems, decrement, deleteFromCart } =
  cart.actions;
