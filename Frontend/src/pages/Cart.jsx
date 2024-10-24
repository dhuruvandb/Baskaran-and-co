import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";
import ProductList from "../components/ProductList";
import {
  cartItems,
  cartItemsStatus,
} from "../components/store/Selectors/cart-selectors";
import { getCart } from "../components/store/Thunks/cart-thunk";
import Loader from "../components/Loader";
import RefreshButton from "../components/RefreshButton";
import checkStatus from "../helper/checkLoadingStatus";
export default function Cart() {
  const cartValue = useSelector(cartItems);
  const cartStatus = useSelector(cartItemsStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cartValue
    .reduce((pre, next) => {
      return pre + next.cartValue * next.price;
    }, 0)
    .toFixed(2);
  const totalItems = cartValue.reduce((pre, next) => {
    return pre + next.cartValue;
  }, 0);
  useEffect(() => {
    dispatch(getCart("66ae15a9ac912312f503f23599e"));
  }, [dispatch]);

  return (
    <>
      <fieldset>
        <legend>Cart</legend>
        {checkStatus(
          cartValue.length > 0 ? (
            <section>
              <ProductList product={cartValue} />
              <hr />
              <Link to="/">
                <button>Shop More Products</button>
              </Link>
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
                    <td>Total Amount : </td>
                    <td>{totalPrice}</td>
                  </tr>
                </tbody>
              </table>

              <button
                onClick={() => {
                  navigate("/checkout");
                  window.location.reload();
                }}
              >
                Buy Now
              </button>
            </section>
          ) : (
            <>
              <p>Your Cart is Empty</p>
              <Link to="/">
                <button>Shop Now</button>
              </Link>
            </>
          ),
          cartStatus
        )}
      </fieldset>
    </>
  );
}
