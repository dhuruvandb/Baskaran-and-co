import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import ProductList from "../components/ProductList";
import { cartItems } from "../components/store/Selectors/cart-selectors";
import { getCart } from "../components/store/Thunks/cart-thunk";
export default function Cart() {
  const cartValue = useSelector(cartItems);
  console.log(cartValue);

  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    dispatch(getCart());
    setTotalPrice(0);

    setInCart(true);
  }, []);

  return (
    <>
      <fieldset>
        <legend>Cart</legend>
        {Object.keys(cartValue).length > 0 ? (
          <section>
            <ol>
              {/* <ProductList product inCart={inCart} /> */}
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
