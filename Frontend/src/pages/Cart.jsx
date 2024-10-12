import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import ProductList from "../components/ProductList";
import { cartItems } from "../components/store/Selectors/cart-selectors";
import { getCart } from "../components/store/Thunks/cart-thunk";
export default function Cart() {
  const cartValue = useSelector(cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartValue
    .reduce((pre, next) => {
      return pre + next.cartValue * next.price;
    }, 0)
    .toFixed(2);
  const totalItems = cartValue.reduce((pre, next) => {
    return pre + next.cartValue;
  }, 0);
  const [inCart, setInCart] = useState(false);
  useEffect(() => {
    dispatch(getCart("66ae15a9ac912312f503f23599e"));
    setInCart(true);
  }, [dispatch]);

  return (
    <>
      <fieldset>
        <legend>Cart</legend>
        {cartValue.length > 0 ? (
          <section>
            <ol>
              <ProductList product={cartValue} inCart={inCart} />
              <hr />
            </ol>
            <table>
              <tbody>
                <tr>
                  <th>Price Details</th>
                </tr>
                <tr>
                  <td>Price of {totalItems} Items : </td>
                  <td>{totalPrice}</td>
                </tr>
                <tr>
                  <td>Delivery Charges : </td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Total Amount : </td>
                  <td>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <Link to="/checkout">
              <button>Buy Now</button>
            </Link>
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
