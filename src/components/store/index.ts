import { createSlice, configureStore } from "@reduxjs/toolkit";

export const cartValueActions = cartValue.actions;
export const productDetailsAction = productDetails.actions;
export const loginAction = loggedInStatus.actions;
export const store = configureStore({
  reducer: {
    cartVal: cartValue.reducer,
    productDetailsInfo: productDetails.reducer,
    loggedInfo: loggedInStatus.reducer,
  },
});
