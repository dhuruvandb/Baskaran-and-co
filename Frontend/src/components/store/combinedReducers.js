import { combineReducers } from "redux";
import { fetchProducts } from "./Slices/product-slice";

export const reducers = combineReducers({
  products: fetchProducts.reducer,
});
