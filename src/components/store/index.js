import { configureStore } from "@reduxjs/toolkit";
import { cartVal, productDetailsInfo, loggedInfo } from "./Slices";

export const store = configureStore({
  reducer: {
    cartVal,
    productDetailsInfo,
    loggedInfo,
  },
});
