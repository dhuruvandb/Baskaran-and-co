import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductById,
  fetchProductCategories,
} from "../Thunks/products-thunk";

const initialState = {
  catergories: [],
  items: [],
  status: "idle",
  error: "",
};
export const fetchProducts = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        const { payload } = action;
        state.items = payload;
        state.status = "successful";
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch the products";
      });

    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const { payload } = action;

        state.items = payload;
        state.status = "successful";
        return;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch the product";
      });

    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        const { payload } = action;
        state.catergories = payload;
        state.status = "successful";
      })
      .addCase(fetchProductCategories.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch the products";
      });
  },
});
