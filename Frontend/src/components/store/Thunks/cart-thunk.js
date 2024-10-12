import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../helper/fetchUrl";

export const addToCart = createAsyncThunk("cart/add", async (data) => {
  try {
    await Axios("post", `/addcart`, data);
  } catch (error) {
    console.error("Failed to add to cart:", error);
  }
});

export const updateCart = createAsyncThunk("cart/update", async (data) => {
  try {
    await Axios("post", `/updatecart`, data);
  } catch (error) {
    console.error("Failed to update cart:", error);
  }
});

export const getCart = createAsyncThunk("cart/get", async (userId) => {
  try {
    const response = await Axios("get", `/getcart/${userId}`);
    console.log(response);

    return response.data.result;
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    return null;
  }
});

export const deleteCart = createAsyncThunk(
  "cart/delete",
  async (data, userId) => {
    try {
      await Axios("delete", `/deletecart`, data);
      const response = await Axios("get", `/getcart/${userId}`);
      return response.data.result;
    } catch (error) {
      console.error("Failed to delete from cart:", error);
    }
  }
);
