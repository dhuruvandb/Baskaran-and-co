import ProductList from "./Layouts/ProductList";
import productDetails from "./Data/productDetails.json";
import Header from "./Layouts/Header";
export default function Main() {
  return (
    <>
    <Header />
      <ProductList product={productDetails} />
    </>
  );
}
