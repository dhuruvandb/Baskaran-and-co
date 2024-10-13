import "../styles/product.css";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { addToCart, deleteCart, updateCart } from "./store/Thunks/cart-thunk";
import { decrement, increment, setClicked } from "./store/Slices/product-slice";
import {
  addProductToCart,
  decrementCart,
  incrementCart,
  removeProductFromCart,
} from "./store/Slices/cart-slice";
export default function ProductList({ product, key }) {
  let { productId } = useParams();
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const inCart = /cart/.test(pathname);
  const handleAddToCart = (userId, productId) => {
    dispatch(increment(productId));
    const getProductToAddInCart = product.filter(
      (data) => data._id === productId
    );
    dispatch(addProductToCart(...getProductToAddInCart));
    dispatch(incrementCart(productId));
    dispatch(
      addToCart({
        userId,
        Items: {
          productId,
          count: 1,
        },
      })
    );
    dispatch(setClicked());
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
    dispatch(setClicked());
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
    dispatch(setClicked());
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
    dispatch(setClicked());
  };
  return (
    <>
      <div className="product" key={key}>
        {product.map((data, i) => {
          const { _id, name, description, price, images, cartValue } = data;
          return (
            <figure key={i}>
              <p>{name}</p>
              {!productId ? (
                <Link to={`${_id}`} target="_blank" rel="noreferrer">
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
