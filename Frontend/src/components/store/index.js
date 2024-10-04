import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./combinedReducers";

export const store = configureStore({
  reducer: {
    reducers,
  },
});
