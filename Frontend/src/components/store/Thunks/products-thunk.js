import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const apiData = await Axios("get", "/user/products");
    return apiData.data.result;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    return await Axios("get", `/user/product/${id}`);
  }
);

export const fetchProductCategories = createAsyncThunk(
  "products/fetchProductCategories",
  async () => {
    const apiData = await Axios("get", `/category`);
    return apiData.data.result;
  }
);
