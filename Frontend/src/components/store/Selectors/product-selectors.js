export const selectProducts = (state) => state.reducers.products.items;
export const selectProductsStatus = (state) => state.reducers.products.status;
export const selectProductsError = (state) => state.reducers.products.error;
export const selectProductCatergories = (state) =>
  state.reducers.products.categories;
export const selectSearch = (state) => state.reducers.products.searchResult;
export const selectBuyNowProducts = (state) => state.reducers.products.buyNow;
export const selectSearchStatus = (state) => state.reducers.products.searchResultStatus;
