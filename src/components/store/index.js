import { createSlice, configureStore } from "@reduxjs/toolkit";
const stateValues = { productDetails: [], cartValue: {} };

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
export const cartValueActions = cartValue.actions;
export const productDetailsAction = productDetails.actions;
export const store = configureStore({
  reducer: {
    cartVal: cartValue.reducer,
    productDetailsInfo: productDetails.reducer,
  },
});
