import { combineReducers } from "redux";
import { fetchProducts } from "./Slices/product-slice";
import { cart } from "./Slices/cart-slice";

export const reducers = combineReducers({
  products: fetchProducts.reducer,
  cart: cart.reducer,
});
