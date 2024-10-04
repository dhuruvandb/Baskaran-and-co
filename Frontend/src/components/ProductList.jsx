import "../styles/product.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  addCart,
  deleteCart,
  updateCart,
  getCart,
} from "./store/Thunks/cart-thunk";
export default function ProductList({ product, inCart, key }) {
  let { productId } = useParams();
  const dispatch = useDispatch();
  let { pathname } = useLocation();
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
                          updateCart(
                            {
                              userId: "66ae15a9ac912312f503f23599e",
                              Items: {
                                productId: _id,
                                count: -1,
                              },
                            },
                            "66ae15a9ac912312f503f23599e"
                          )
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
                              userId: "66ae15a9ac912312f503f23599e",
                              Items: {
                                productId: _id,
                                count: 1,
                              },
                            },
                            "66ae15a9ac912312f503f23599e"
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
                          addCart(
                            {
                              userId: "66ae15a9ac912312f503f23599e",
                              Items: {
                                productId: _id,
                                count: 1,
                              },
                            },
                            "66ae15a9ac912312f503f23599e"
                          )
                        );
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
                          userId: "66ae15a9ac912312f503f23599e",
                          Items: {
                            productId: _id,
                            count: 1,
                          },
                        },
                        "66ae15a9ac912312f503f23599e"
                      )
                    );
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
