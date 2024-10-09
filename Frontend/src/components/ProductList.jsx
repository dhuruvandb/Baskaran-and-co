import "../styles/product.css";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addToCart,
  deleteCart,
  updateCart,
  getCart,
} from "./store/Thunks/cart-thunk";
import { useEffect } from "react";
import {
  increment,
  decrement,
  deleteFromCart,
} from "./store/Slices/cart-slice";
export default function ProductList({ product, inCart, key, callGetCart }) {
  let { productId } = useParams();
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  useEffect(() => {
    callGetCart();
  }, []);

  const handleAddToCart = (userId, productId) => {
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
    callGetCart();
  };

  const handleIncrement = (userId, productId) => {
    dispatch(increment(productId));
    dispatch(
      updateCart({
        userId,
        Items: {
          productId,
          count: 1,
        },
      })
    );
    callGetCart();
  };

  const handleDecrement = (userId, productId) => {
    dispatch(decrement(productId));
    dispatch(
      updateCart({
        userId,
        Items: {
          productId,
          count: -1,
        },
      })
    );
    callGetCart();
  };

  const handleDeleteCart = (userId, productId) => {
    dispatch(deleteFromCart(productId));
    dispatch(
      deleteCart({
        userId,
        Items: {
          productId,
          count: 1,
        },
      })
    );
    callGetCart();
  };
  return (
    <>
      <div className="product" key={key}>
        {product.map((data, i) => {
          const { _id, name, description, price, images, cartValue } = data;
          return (
            <figure key={i}>
              <p>{name}</p>
              {!productId && !inCart ? (
                <Link to={`${_id}`} target="_blank" rel="noreferrer">
                  <img src={images} alt={name} loading="lazy" />
                </Link>
              ) : (
                <img
                  loading="lazy"
                  src={images}
                  alt={name}
                  height={inCart ? 50 : null}
                  width={inCart ? 50 : null}
                />
              )}
              <p>{description}</p>
              <p>&#8377;{price}</p>
              <>
                {cartValue > 0 ? (
                  <>
                    <button
                      onClick={() => {
                        handleDecrement("66ae15a9ac912312f503f23599e", _id);
                      }}
                    >
                      &nbsp;-{cartValue < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue || 0}</span>
                    <button
                      onClick={() => {
                        handleIncrement("66ae15a9ac912312f503f23599e", _id);
                      }}
                    >
                      &nbsp;+{cartValue < 10 ? "\u00A0" : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        handleAddToCart("66ae15a9ac912312f503f23599e", _id);
                      }}
                    >
                      Add Cart
                    </button>
                  </>
                )}
              </>
              {inCart ? (
                <button
                  onClick={() => {
                    handleDeleteCart("66ae15a9ac912312f503f23599e", _id);
                  }}
                >
                  Remove
                </button>
              ) : (
                <button onClick={() => {}}>Buy Now</button>
              )}
              {/wishlist/.test(pathname) && <button>Remove</button>}
            </figure>
          );
        })}
      </div>
    </>
  );
}
