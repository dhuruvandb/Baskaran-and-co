import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (category) => {
    const apiData = await Axios("get", `/products/${category}`);
    return apiData.data.result;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const apiData = await Axios("get", `/products/${productId}`);
    return apiData.data.result;
  }
);

export const fetchProductCategories = createAsyncThunk(
  "products/fetchProductCategories",
  async () => {
    const apiData = await Axios("get", `/category`);
    return apiData.data.result;
  }
);
