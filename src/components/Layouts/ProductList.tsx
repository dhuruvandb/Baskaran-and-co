import "../../styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartValueActions } from "../store";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function ProductList({ product, inCart }) {
  const cartValue = useSelector((state) => state.cartVal.cartValue);
  let { Id } = useParams();

  const dispatch = useDispatch();
  return (
    <>
      <div className="product">
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
                    <button
                      onClick={() =>
                        dispatch(cartValueActions.decrementCartValue(id))
                      }
                    >
                      &nbsp;-{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue[id] || 0}</span>
                    <button
                      onClick={() =>
                        dispatch(cartValueActions.incrementCartValue(id))
                      }
                    >
                      &nbsp;+{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        dispatch(cartValueActions.incrementCartValue(id))
                      }
                    >
                      Add Cart
                    </button>
                  </>
                )}
              </>
              {inCart ? (
                <button
                  onClick={() => dispatch(cartValueActions.removeCartValue(id))}
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
