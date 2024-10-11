import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (data) => {
    const { categoryName, userId } = data;
    const apiData = await Axios(
      "get",
      `/products/${categoryName}?userId=${userId}`
    );
    return apiData.data.result;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const apiData = await Axios("get", `/product/${productId}`);
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
