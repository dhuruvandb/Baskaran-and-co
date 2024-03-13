import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Cart() {
  const cartValue = useSelector((state) => state.cartVal.cartValue);
  const productDetails = useSelector(
    (state) => state.productDetailsInfo.productDetails
  );
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(true);
  }, [cartValue]);
  return (
    <>
      <fieldset>
        <legend>Cart</legend>
        {Object.keys(cartValue).length > 0 ? (
          <section>
            <ol>
              {Object.entries(cartValue).map(([key]) => {
                let filteredArray = productDetails.filter(
                  (data) => data.id === Number(key) && cartValue[key] !== 0
                );
                return (
                  <>
                    <ProductList
                      product={filteredArray}
                      inCart={inCart}
                      key={key}
                    />
                    <hr />
                  </>
                );
              })}
            </ol>
          </section>
        ) : (
          <>
            <p>Your Cart is Empty</p>
            <Link to="/">
              <button>Shop Now</button>
            </Link>
          </>
        )}
      </fieldset>
    </>
  );
}
