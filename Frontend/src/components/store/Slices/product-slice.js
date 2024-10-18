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
  buyNow:[],
  status: "idle",
  error: "",
  searchResult: [],
};

export const fetchProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      const product = state.items.find((data) => data._id === action.payload);
      const buyNowProduct = state.buyNow.find((data) => data._id === action.payload);
      !buyNowProduct?product.cartValue += 1:buyNowProduct.cartValue+=1
    },
    decrement: (state, action) => {
      const product = state.items.find((data) => data._id === action.payload);
      const buyNowProduct = state.buyNow.find((data) => data._id === action.payload);
      if (product && product.cartValue > 0) {
        product.cartValue -= 1;
      }
      if (buyNowProduct && buyNowProduct.cartValue > 0) {
        buyNowProduct.cartValue -= 1;
      }
    },
    getProduct:(state,action)=>{
      const product = state.items.filter((data) => data._id === action.payload);
      state.items=product;
    },
    addToBuyNow:(state,action)=>{
      const products =state.items.filter((data) => data._id === action.payload);
      state.buyNow= products.map((data) => {if(data._id === action.payload){
        data.cartValue=1
        return data
      }});
    },
    removeProductFromBuyNow: (state, action) => {
      console.log("hiii");
      state.buyNow = state.buyNow.filter(
        (data) => data._id !== action.payload
      );
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

export const { increment, decrement,getProduct,addToBuyNow,removeProductFromBuyNow } = fetchProducts.actions;
