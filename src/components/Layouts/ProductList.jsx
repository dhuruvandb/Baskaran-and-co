import "../../styles/product.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCartValue,
  decrementCartValue,
  removeCartValue,
} from "../store/Slices";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function ProductList({ product, inCart, key }) {
  const cartValue = useSelector((state) => state.cartVal.cartValue);
  let { Id } = useParams();
  const dialog = useRef(null);
  const dispatch = useDispatch();
  const [displayid, setDisplayid] = useState(null);
  let filteredArray = product.filter((data) => data.id === displayid);
  return (
    <>
      <dialog ref={dialog}>
        <strong>Are you sure want to remove this item</strong>
        {filteredArray.map((data) => {
          const { name, description, price, image } = data;
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
        {product.map((data) => {
          const { id, name, description, price, image } = data;
          return (
            <figure key={id}>
              <p>{name}</p>
              {!Id && !inCart ? (
                <Link to={`product/${id}`} target="_blank" rel="noreferrer">
                  <img src={image} alt={name} />
                </Link>
              ) : (
                <img
                  src={image}
                  alt={name}
                  height={inCart ? 50 : null}
                  width={inCart ? 50 : null}
                />
              )}
              <p>{description}</p>
              <p>&#8377;{price}</p>
              <>
                {cartValue[id] > 0 ? (
                  <>
                    <button onClick={() => dispatch(decrementCartValue(id))}>
                      &nbsp;-{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue[id] || 0}</span>
                    <button onClick={() => dispatch(incrementCartValue(id))}>
                      &nbsp;+{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => dispatch(incrementCartValue(id))}>
                      Add Cart
                    </button>
                  </>
                )}
              </>
              {inCart ? (
                <button
                  onClick={() => {
                    setDisplayid(id);
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
