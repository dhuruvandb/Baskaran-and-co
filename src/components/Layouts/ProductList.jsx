import "../../styles/product.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../constants/constants";
export default function ProductList({ product }) {
  const cartValue = useSelector((state) => state.cartValue);
  const dispatch = useDispatch();
  return (
    <>
      <div className="product">
        {product.map((data) => {
          const { id, name, description, price, image } = data;
          return (
            <div key={id}>
              <p>{name}</p>
              <Link to={`/product/${id}`} target="_blank">
                <img src={image} alt={name} />
              </Link>
              <p>{description}</p>
              <p>&#8377;{price}</p>

              <>
                {cartValue[id] > 0 ? (
                  <>
                    <button
                      onClick={() =>
                        dispatch({ type: DECREMENT, buttonId: id })
                      }
                    >
                      &nbsp;-{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue[id] || 0}</span>
                    <button
                      onClick={() =>
                        dispatch({ type: INCREMENT, buttonId: id })
                      }
                    >
                      &nbsp;+{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        dispatch({ type: INCREMENT, buttonId: id })
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
