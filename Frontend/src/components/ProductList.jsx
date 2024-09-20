import "../styles/product.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartValue } from "./store/Slices";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addCart,
  deleteCart,
  updateCart,
  getCart,
} from "./store/Thunks/cart-thunk";
import { cartItems } from "./store/Selectors/cart-selectors";
export default function ProductList({ product, inCart, key }) {
  const cart = useSelector(cartItems);

  let { productId } = useParams();

  const dialog = useRef(null);
  const dispatch = useDispatch();
  const [displayid, setDisplayid] = useState(null);
  let filteredArray = [];
  useEffect(() => {
    dispatch(getCart("66ae15a9ac912312f503f23599e"));
  }, [dispatch]);
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
                        dispatch(
                          updateCart({
                            "66ae15a9ac9ef503f293599e": {
                              [_id]: -1,
                            },
                          })
                        );
                      }}
                    >
                      &nbsp;-{cartValue < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue || 0}</span>
                    <button
                      onClick={() => {
                        dispatch(
                          updateCart(
                            {
                              userId: "66ae15a9ac9ef503f293599e",
                              count: 1,
                            },
                            _id
                          )
                        );
                      }}
                    >
                      &nbsp;+{cartValue < 10 ? "\u00A0" : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        dispatch(
                          addCart({
                            userId: "66ae15a9ac9ef503f293599e",
                            items: { [_id]: 1 },
                          })
                        );
                        dispatch(getCart("66ae15a9ac912312f503f23599e"));
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
                    dispatch(
                      deleteCart(
                        {
                          userId: "66ae15a9ac9ef503f293599e",
                          count: -1,
                        },
                        _id
                      )
                    );
                    setDisplayid(_id);
                    dialog.current.showModal();
                  }}
                >
                  Remove
                </button>
              ) : (
                <button>Buy Now</button>
              )}
            </figure>
          );
        })}
      </div>
    </>
  );
}
