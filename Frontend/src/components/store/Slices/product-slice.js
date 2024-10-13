import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductById,
  fetchProductCategories,
} from "../Thunks/products-thunk";

const initialState = {
  categories: [],
  items: [],
  status: "idle",
  error: "",
};

export const fetchProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.items.find((data) => data._id === action.payload);
      if (product) {
        product.cartValue += 1;
      }
    },
    decrement: (state, action) => {
      const product = state.items.find((data) => data._id === action.payload);
      if (product && product.cartValue > 0) {
        product.cartValue -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        if (state.items.length === 0) {
          state.items = action.payload;
        }
        state.status = "successful";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch the products";
      });

    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        if (state.items.length === 0) {
          state.items = action.payload;
        }
        state.status = "successful";
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch the product";
      });

    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "successful";
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch the categories";
      });
  },
});

export const { increment, decrement } = fetchProducts.actions;
