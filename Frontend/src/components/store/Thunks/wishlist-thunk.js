import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const addWishList = createAsyncThunk("/addWishList", async (data) => {
  return await Axios("post", "/data");
});

export const getWishList = createAsyncThunk("/getWishList", async (data) => {
  const apiData = await Axios("get", `/getwishlist/${data}`);
  return apiData.data.result;
});
