import "../../styles/product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartValueActions } from "../store";
import { useParams } from "react-router";
export default function ProductList({ product }) {
  const cartValue = useSelector((state) => state.cartVal.cartValue);
  let { Id } = useParams();
  const dispatch = useDispatch();
  return (
    <>
      <div className="product">
        {product.map((data) => {
          const { id, name, description, price, image } = data;
          return (
            <div key={id}>
              <p>{name}</p>
              {!Id ? (
                <a href={`/product/${id}`} target="_blank" rel="noreferrer">
                  <img src={image} alt={name} />
                </a>
              ) : (
                <img src={image} alt={name} />
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
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
