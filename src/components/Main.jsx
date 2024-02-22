import ProductList from "./Layouts/ProductList";
import productDetails from "./Data/productDetails.json";
export default function Main() {
  return (
    <>
      <ProductList product={productDetails} />
    </>
  );
}
