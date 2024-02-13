import { useContext } from "react";
import { context } from "../../ContextProvider";
import "../../styles/product.css";
export default function Product({ product }) {
  const { cartValue, addCartValue, removeCartValue } = useContext(context);

  return (
    <>
      <div className="product">
        {product.map((data) => {
          const { id, name, description, price, image } = data;
          return (
            <div key={id}>
              <p>{name}</p>
              <img src={image} alt={name} />
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
