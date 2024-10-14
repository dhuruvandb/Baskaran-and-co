import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
} from "../components/store/Selectors/product-selectors";
import { useParams } from "react-router";
import {
  fetchAllProductsByCategories,
  fetchProductById,
} from "../components/store/Thunks/products-thunk";
import { useEffect } from "react";
export default function Product() {
  const { categoryName, productId } = useParams();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(
        fetchProductById({ userId: "66ae15a9ac912312f503f23599e", productId })
      );
    } else {
      dispatch(
        fetchAllProductsByCategories({
          categoryName,
          userId: "66ae15a9ac912312f503f23599e",
        })
      );
    }
  }, []);
  return (
    <>
      <ProductList product={products} />
    </>
  );
}
