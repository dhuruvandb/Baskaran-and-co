import { configureStore } from "@reduxjs/toolkit";
import { cartVal, productDetailsInfo, loggedInfo } from "./Slices";
import { reducers } from "./combinedReducers";

export const store = configureStore({
  reducer: {
    cartVal,
    productDetailsInfo,
    loggedInfo,
    reducers,
  },
});
