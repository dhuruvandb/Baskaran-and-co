import { createSlice } from "@reduxjs/toolkit";

import { stateValues } from "../../types";
const stateValues = { productDetails: [], cartValue: {}, isLoggedin: false };

const cartValue = createSlice({
  name: "CartValueUpdate",
  initialState: stateValues,
  reducers: {
    incrementCartValue(state, action: { payload: number }) {
      const { payload } = action;
      state.cartValue[payload] = (state.cartValue[payload] || 0) + 1;
    },
    decrementCartValue(state, action: { payload: number }) {
      const { payload } = action;
      if (state.cartValue[payload] > 0) {
        state.cartValue[payload]--;
        if (state.cartValue[payload] === 0) {
          delete state.cartValue[payload];
        }
      }
    },
    removeCartValue(state, action: { payload: number }) {
      const { payload } = action;
      delete state.cartValue[payload];
    },
  },
});
const productDetails = createSlice({
  name: "productDetailsInfo",
  initialState: stateValues,
  reducers: {
    updateProductDetails(state, action: { payload: {} }) {
      const { payload } = action;

      state.productDetails.push(payload);
    },
  },
});

const loggedInStatus = createSlice({
  name: "LoginStatus",
  initialState: stateValues,
  reducers: {
    login(state, action) {
      const { payload } = action;
      state.isLoggedin = payload;
    },
    logout(state, action) {
      const { payload } = action;
      state.isLoggedin = payload;
    },
  },
});

export const { incrementCartValue, decrementCartValue, removeCartValue } =
  cartValue.actions;

export const { updateProductDetails } = productDetails.actions;

export const { login, logout } = loggedInStatus.actions;

export default {
  cartVal: cartValue.reducer,
  productDetailsInfo: productDetails.reducer,
  loggedInfo: loggedInStatus.reducer,
};
