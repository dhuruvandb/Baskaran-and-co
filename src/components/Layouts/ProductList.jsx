import { useContext } from "react";
import { context } from "../../ContextProvider";
import "../../styles/product.css";
import { Link } from "react-router-dom";
export default function ProductList({ product }) {
  const { cartValue, addCartValue, removeCartValue } = useContext(context);
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
                    <button onClick={() => removeCartValue(id)}>
                      &nbsp;-{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                    <span>{cartValue[id] || 0}</span>
                    <button onClick={() => addCartValue(id)}>
                      &nbsp;+{cartValue[id] < 10 ? "\u00A0" : null}
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => addCartValue(id)}>Add Cart</button>
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
