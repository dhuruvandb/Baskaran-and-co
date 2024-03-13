import { createSlice } from "@reduxjs/toolkit";

const stateValues = { productDetails: [], cartValue: {}, isLoggedin: false };

const cartValue = createSlice({
  name: "CartValueUpdate",
  initialState: stateValues,
  reducers: {
    incrementCartValue(state, action) {
      const { payload } = action;
      state.cartValue[payload] = (state.cartValue[payload] || 0) + 1;
    },
    decrementCartValue(state, action) {
      const { payload } = action;
      if (state.cartValue[payload] > 0) {
        state.cartValue[payload]--;
        if (state.cartValue[payload] === 0) {
          delete state.cartValue[payload];
        }
      }
    },
    removeCartValue(state, action) {
      const { payload } = action;
      delete state.cartValue[payload];
    },
  },
});
const productDetails = createSlice({
  name: "productDetailsInfo",
  initialState: stateValues,
  reducers: {
    updateProductDetails(state, action) {
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

export const cartVal = cartValue.reducer;

export const productDetailsInfo = productDetails.reducer;

export const loggedInfo = loggedInStatus.reducer;
