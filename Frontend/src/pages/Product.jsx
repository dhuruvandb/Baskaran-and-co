import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsStatus,
} from "../components/store/Selectors/product-selectors";
import { useParams } from "react-router";
import {
  fetchAllProductsByCategories,
  fetchProductById,
} from "../components/store/Thunks/products-thunk";
import { useEffect } from "react";
import checkStatus from "../helper/checkLoadingStatus";
export default function Product() {
  const { categoryName, productIdentifier } = useParams();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productIdentifier !== undefined) {
      dispatch(
        fetchProductById({
          userId: "66ae15a9ac912312f503f23599e",
          productIdentifier,
        })
      );
    } else if (categoryName !== undefined) {
      dispatch(
        fetchAllProductsByCategories({
          categoryName,
          userId: "66ae15a9ac912312f503f23599e",
        })
      );
    }
  }, [categoryName, productIdentifier, dispatch]);
  return checkStatus(<ProductList product={products} />, status);
}
