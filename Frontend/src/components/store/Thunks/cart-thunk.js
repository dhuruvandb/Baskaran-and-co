import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const addCart = createAsyncThunk("cart/add", async (data) => {
  return await Axios("post", `/addcart`, data);
});

export const updateCart = createAsyncThunk("cart/update", async (data, _id) => {
  return await Axios("post", `/updatecart/${_id}`, data);
});

export const deleteCart = createAsyncThunk("cart/delete", async (data, _id) => {
  return await Axios("post", `/deletecart/${_id}`, data);
});
