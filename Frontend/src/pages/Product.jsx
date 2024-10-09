import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectAllProductsStatus,
} from "../components/store/Selectors/product-selectors";
import Loader from "../components/Loader";
import RefreshButton from "../components/RefreshButton";
import { useEffect } from "react";
import { getCart } from "../components/store/Thunks/cart-thunk";
import { cartItems } from "../components/store/Selectors/cart-selectors";
export default function Product() {
  const products = useSelector(selectAllProducts);

  const cart = useSelector(cartItems);

  const productSet = new Set(products.map((_) => _.name));
  const cartSet = new Set(cart.map((_) => _.name));
  let mergedProducts = [
    ...cart.filter((data) => productSet.has(data.name)),
    ...products.filter((data) => !cartSet.has(data.name)),
  ];
  const status = useSelector(selectAllProductsStatus);
  const dispatch = useDispatch();

  const callGetCart = () => dispatch(getCart("66ae15a9ac912312f503f23599e"));
  useEffect(() => {
    callGetCart();
  }, []);
  let element;
  if (status === "loading") {
    element = <Loader />;
  } else if (status === "failed") {
    element = <RefreshButton />;
  } else {
    element = (
      <ProductList product={mergedProducts} callGetCart={callGetCart} />
    );
  }
  return <>{element}</>;
}
