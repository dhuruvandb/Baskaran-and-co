// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { DECREMENT, INCREMENT } from "../constants/constants";
const stateValues = { cartValue: {} };
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
  },
});

export const cartValueActions = cartValue.actions;
export const store = configureStore({
  reducer: {
    cartVal: cartValue.reducer,
  },
});
