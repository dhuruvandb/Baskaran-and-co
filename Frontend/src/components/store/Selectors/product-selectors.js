export const selectAllProducts = (state) => state.reducers.products.items;
export const selectAllProductsStatus = (state) =>
  state.reducers.products.status;
export const selectAllProductsError = (state) => state.reducers.products.error;
export const selectAllProductCatergories = (state) =>
  state.reducers.products.catergories;
