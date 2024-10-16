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
import Loader from "../components/Loader";
import RefreshButton from "../components/RefreshButton";
export default function Product() {
  const { categoryName, productId } = useParams();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(
        fetchProductById({ userId: "66ae15a9ac912312f503f23599e", productId })
      );
    } else  {
      dispatch(
        fetchAllProductsByCategories({
          categoryName,
          userId: "66ae15a9ac912312f503f23599e",
        })
      );
    }
  }, [categoryName, productId, dispatch]);
  if (status === "loading") {
    return <Loader />;
  } else if (status === "successful") {
    return <ProductList product={products} />;
  } else if (status === "failed") {
    return <RefreshButton />;
  }
}
