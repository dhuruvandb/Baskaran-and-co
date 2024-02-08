import Product from "./Layouts/Product";
import productDetails from "./Data/productDetails.json";
export default function Main() {
  return (
    <>
      <Product product={productDetails} />
    </>
  );
}
