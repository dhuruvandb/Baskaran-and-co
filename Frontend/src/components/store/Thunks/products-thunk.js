import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const fetchAllProductsByCategories = createAsyncThunk(
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

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (data) => {
    const { search } = data;
    const apiData = await Axios("get", `/search/${search}`);
    return apiData.data.result;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (data) => {
    const { productIdentifier, userId } = data;
    const apiData = await Axios(
      "get",
      `/product/${productIdentifier}?userId=${userId}`
    );
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
