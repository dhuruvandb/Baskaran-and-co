import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../components/store/Selectors/product-selectors";
import { useParams } from "react-router";
import {
  fetchAllProducts,
  fetchProductById,
} from "../components/store/Thunks/products-thunk";
import { useEffect, useState } from "react";
export default function Product() {
  const { categoryName, productId } = useParams();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (productId) {
      dispatch(
        fetchProductById({ userId: "66ae15a9ac912312f503f23599e", productId })
      );
    } else {
      dispatch(
        fetchAllProducts({
          categoryName,
          userId: "66ae15a9ac912312f503f23599e",
        })
      );
    }
  }, [dispatch, clicked]);
  return (
    <>
      <ProductList product={products} setClicked={setClicked} />
    </>
  );
}
