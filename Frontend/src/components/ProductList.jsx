import "../styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, deleteCart, updateCart } from "./store/Thunks/cart-thunk";
import {
  addToBuyNow,
  decrement,
  increment,
} from "./store/Slices/product-slice";
import {
  addProductToCart,
  decrementCart,
  incrementCart,
  removeProductFromCart,
} from "./store/Slices/cart-slice";
import { Button } from "@mui/material";
import { cartItems } from "./store/Selectors/cart-selectors";
import { useState } from "react";
export default function ProductList({ product, key }) {
  let { productIdentifier } = useParams();
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const inCart = /cart/.test(pathname);
  const navigate = useNavigate();
  const cartValue = useSelector(cartItems) || [];
  const totalItems = cartValue.reduce((pre, next) => pre + next.cartValue, 0);
  const [more, setMore] = useState(0);
  const handleAddToCart = (userId, productId) => {
    const getProductToAddInCart = product.filter(
      (data) => data._id === productId
    );
    dispatch(addProductToCart(...getProductToAddInCart));
    dispatch(incrementCart(productId));
    dispatch(increment(productId));
    dispatch(
      addToCart({
        userId,
        Items: {
          productId,
          count: 1,
        },
      })
    );
  };

  const handleIncrement = (userId, productId) => {
    dispatch(increment(productId));
    dispatch(incrementCart(productId));
    dispatch(
      updateCart({
        userId,
        Items: {
          productId,
          count: 1,
        },
      })
    );
  };

  const handleDecrement = (userId, productId) => {
    dispatch(decrement(productId));
    dispatch(decrementCart(productId));
    dispatch(
      updateCart({
        userId,
        Items: {
          productId,
          count: -1,
        },
      })
    );
  };

  const handleDeleteCart = (userId, productId) => {
    dispatch(removeProductFromCart(productId));
    dispatch(
      deleteCart({
        userId,
        Items: {
          productId,
          count: 1,
        },
      })
    );
  };
  return (
    <>
      {!inCart && totalItems > 0 && (
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/cart");
            window.location.reload();
          }}
        >
          View Cart
        </Button>
      )}
      <table className="product">
        <tbody>
          {product.map((data, i) => {
            const {
              _id,
              name,
              description,
              price,
              images,
              cartValue,
              category,
            } = data;
            return (
              <tr key={i}>
                <td>
                  <figure>
                    <p>{name}</p>
                    {!productIdentifier ? (
                      <Link
                        to={`/products/${category}/${_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img alt={name} loading="lazy" src={images} />
                      </Link>
                    ) : (
                      <img
                        loading="lazy"
                        src={images}
                        alt={name}
                        height={inCart ? 100 : null}
                        width={inCart ? 100 : null}
                      />
                    )}
                    <p>
                      {description.slice(
                        0,
                        more > 0 ? more : Math.floor(description.length * 0.25)
                      )}
                      {more !== description.length && (
                        <span
                          onClick={() => setMore(description.length)}
                          style={{ cursor: "pointer", color: "blue" }}
                          key={i}
                        >
                          ... more
                        </span>
                      )}
                      {more === description.length && (
                        <>
                          <br />
                          <span
                            onClick={() => setMore(0)}
                            style={{ cursor: "pointer", color: "blue" }}
                          >
                            less
                          </span>
                        </>
                      )}
                    </p>
                    <p>&#8377;{price}</p>
                    <>
                      {cartValue > 0 ? (
                        <>
                          <button
                            onClick={() =>
                              handleDecrement(
                                "66ae15a9ac912312f503f23599e",
                                _id
                              )
                            }
                            disabled={cartValue <= 0}
                          >
                            &nbsp;-{cartValue < 10 ? "\u00A0" : null}
                          </button>
                          <span>{cartValue || 0}</span>
                          <button
                            onClick={() =>
                              handleIncrement(
                                "66ae15a9ac912312f503f23599e",
                                _id
                              )
                            }
                          >
                            &nbsp;+{cartValue < 10 ? "\u00A0" : null}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            handleAddToCart("66ae15a9ac912312f503f23599e", _id)
                          }
                        >
                          Add Cart
                        </button>
                      )}
                    </>
                    {inCart && (
                      <button
                        onClick={() =>
                          handleDeleteCart("66ae15a9ac912312f503f23599e", _id)
                        }
                      >
                        Remove
                      </button>
                    )}
                    {productIdentifier && (
                      <button
                        onClick={() => {
                          dispatch(addToBuyNow(_id));
                          navigate("/checkout");
                        }}
                      >
                        Buy Now
                      </button>
                    )}
                    {/wishlist/.test(pathname) && <button>Remove</button>}
                  </figure>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
