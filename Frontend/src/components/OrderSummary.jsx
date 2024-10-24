import { Link } from "react-router-dom";
import "../styles/OrderSummary.css";
import {
  decrement,
  decrementBuyNow,
  getProduct,
  incrementBuyNow,
} from "./store/Slices/product-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectBuyNowProducts } from "./store/Selectors/product-selectors";
export const OrderSummary = ({ products }) => {
  const shippingCost = 20;
  const productTotal = products.reduce((pre, next) => {
    return pre + next.cartValue * next.price;
  }, 0);
  const buyNowproducts = useSelector(selectBuyNowProducts);
  const dispatch = useDispatch();

  if (buyNowproducts.length > 0) {
    dispatch(decrement(buyNowproducts[0]._id));
  }
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td
                onClick={() => {
                  dispatch(getProduct(item._id));
                  window.location.reload();
                }}
              >
                <Link to={`/products/${item.category}/${item._id}`}>
                  <p>{item.name}</p>
                </Link>
              </td>

              {buyNowproducts.length > 0 ? (
                <td>
                  <button onClick={() => dispatch(decrementBuyNow(item._id))}>
                    -
                  </button>
                  {item.cartValue}
                  <button onClick={() => dispatch(incrementBuyNow(item._id))}>
                    +
                  </button>
                </td>
              ) : (
                <td>{item.cartValue}</td>
              )}
              <td>₹{item.price.toFixed(2)}</td>
              <td>₹{(item.price * item.cartValue).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>
              Shipping <br />
              <small className="shipping-info">
                <strong>
                  <i>Free delivery on orders above ₹199</i>
                </strong>
              </small>
            </td>
            <td></td>
            <td></td>
            {productTotal < 199 ? (
              <td>
                ₹{shippingCost.toFixed(2)}
                <br />
                <small className="delivery">
                  Add ₹{(199 - productTotal).toFixed(2)} more to get Free
                  delivery
                </small>
              </td>
            ) : (
              <td>
                ₹<del>{shippingCost.toFixed(2)}</del>
                <br /> <span style={{ color: "green" }}>Free</span>
              </td>
            )}
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td></td>
            <td className="total">
              <strong>
                ₹
                {productTotal < 199
                  ? (productTotal + shippingCost).toFixed(2)
                  : productTotal.toFixed(2)}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
