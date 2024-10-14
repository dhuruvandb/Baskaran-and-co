import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProductsByCategories,
  fetchProductById,
  fetchProductCategories,
  searchProducts,
} from "../Thunks/products-thunk";

const initialState = {
  categories: [],
  items: [],
  status: "idle",
  error: "",
  clicked: false,
  searchResult: [],
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
    setClicked: (state) => {
      state.clicked = !state.clicked;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsByCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsByCategories.fulfilled, (state, action) => {
        if (state.items.length === 0) {
          state.items = action.payload;
        }
        state.status = "successful";
      })
      .addCase(fetchAllProductsByCategories.rejected, (state, action) => {
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

    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.searchResult = action.payload;
    });
  },
});

export const { increment, decrement, setClicked } = fetchProducts.actions;
