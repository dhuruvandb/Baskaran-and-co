export const selectProducts = (state) => state.reducers.products.items;
export const selectProductsStatus = (state) => state.reducers.products.status;
export const selectProductsError = (state) => state.reducers.products.error;
export const selectProductCatergories = (state) =>
  state.reducers.products.categories;
