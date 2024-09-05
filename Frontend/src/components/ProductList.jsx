import "../styles/product.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCartValue,
  decrementCartValue,
  removeCartValue,
} from "./store/Slices";
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
  let filteredArray = product.filter((data) => data._id === displayid);
  useEffect(() => {
    dispatch(getCart("66ae15a9ac9ef503f293599e"));
  }, [dispatch]);
  return (
    <>
      <dialog ref={dialog}>
        <strong>Are you sure want to remove this item ?</strong>
        {filteredArray.map((data) => {
          const { id, name, description, price, image } = data;
          return (
            <figure>
              <p>{name}</p>
              <img
                src={image}
                alt={name}
                height={inCart ? 50 : null}
                width={inCart ? 50 : null}
              />
              <p>{description}</p>
              <p>&#8377;{price}</p>
              <>
                <button disabled>
                  &nbsp;-{cart[id] < 10 ? "\u00A0" : null}
                </button>
                <span>{cart[id] || 0}</span>
                <button disabled>
                  &nbsp;+{cart[id] < 10 ? "\u00A0" : null}
                </button>
              </>
            </figure>
          );
        })}
        <button onClick={() => dialog.current.close()}>Cancel</button>
        <button
          onClick={() => {
            dispatch(removeCartValue(displayid));
            dialog.current.close();
          }}
        >
          Remove
        </button>
      </dialog>
      <div className="product" key={key}>
        {product.map((data, i) => {
          const { _id, name, description, price, images } = data;
          // const cartValue = cart.filter((data) => data.productId === _id)[0];
          const cartValue = {};
          console.log(cartValue);

          return (
            <figure key={i}>
              <p>{name}</p>
              {!productId && !inCart ? (
                <Link to={`${_id}`} target="_blank" rel="noreferrer">
                  {images.map((img) => (
                    <img src={img} alt={name} />
                  ))}
                </Link>
              ) : (
                <img
                  src={images}
                  alt={name}
                  height={inCart ? 50 : null}
                  width={inCart ? 50 : null}
                />
              )}
              <p>{description}</p>
              <p>&#8377;{price}</p>
              <>
                {cartValue[_id] > 0 ? (
                  <>
                    <button
                      onClick={() => {
                        dispatch(
                          updateCart(
                            {
                              userId: "66ae15a9ac9ef503f293599e",
                              count: -1,
                            },
                            _id
                          )
                        );
                      }}
                    >
                      &nbsp;-{cartValue[_id] < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue[_id] || 0}</span>
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
                      &nbsp;+{cartValue[_id] < 10 ? "\u00A0" : null}
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
                        dispatch(getCart("66ae15a9ac9ef503f293599e"));
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
