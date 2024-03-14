import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/cart.css";
export default function Cart() {
  const cartValue = useSelector((state) => state.cartVal.cartValue);
  const productDetails = useSelector(
    (state) => state.productDetailsInfo.productDetails
  );
  const [inCart, setInCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filteredArray, setFilteredArray] = useState(productDetails);
  useEffect(() => {
    const cartValueArray = [];
    let total = 0;
    Object.entries(cartValue).forEach(([key, value]) => {
      const newArray = productDetails.filter(
        (data) => data.id === Number(key) && cartValue[key] !== 0
      );
      if (newArray.length > 0) {
        cartValueArray.push(...newArray);
      }
      newArray.forEach((item) => {
        const { price } = item;
        total += price * value;
      });
    });
    setTotalPrice(total);
    setFilteredArray((pre) => {
      if (JSON.stringify(pre) !== JSON.stringify(cartValueArray)) {
        return cartValueArray;
      } else {
        return pre;
      }
    });
    setInCart(true);
  }, [cartValue, filteredArray, productDetails]);

  return (
    <>
      <fieldset>
        <legend>Cart</legend>
        {Object.keys(cartValue).length > 0 ? (
          <section>
            <ol>
              <ProductList product={filteredArray} inCart={inCart} />

              <hr />
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
      <section>
        <table>
          <tbody>
            <tr>
              <th>Price Details</th>
            </tr>
            <tr>
              <td>Price({Object.keys(cartValue).length})</td>
              <td>{totalPrice}</td>
            </tr>
            <tr>
              <td>Discount : </td>
              <td>value</td>
            </tr>
            <tr>
              <td>Delivery Charges : </td>
              <td>value</td>
            </tr>
            <tr>
              <td>Total Amount : </td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
