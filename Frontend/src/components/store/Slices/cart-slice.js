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
  reducers: {
    addProductToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    incrementCart: (state, action) => {
      const product = state.cartItems.find(
        (data) => data._id === action.payload
      );
      if (product) {
        product.cartValue += 1;
      }
    },
    decrementCart: (state, action) => {
      const product = state.cartItems.find(
        (data) => data._id === action.payload
      );
      if (product) {
        if (product.cartValue > 0) {
          product.cartValue -= 1;
        }
        if (product.cartValue === 0) {
          state.cartItems = state.cartItems.filter(
            (data) => data._id !== action.payload
          );
        }
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (data) => data._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      const { payload } = action;
      if (state.cartItems.length === 0) {
        state.cartItems = payload;
      }
    });
  },
});

export const {
  incrementCart,
  decrementCart,
  addProductToCart,
  removeProductFromCart,
} = cart.actions;
