import productDetails from "../Data/productDetails.json";
import { useSelector } from "react-redux";
export default function Cart() {
  const cartValue = useSelector((state) => state.cartVal.cartValue);
  console.log(cartValue);

  return (
    <>
      <fieldset>
        <legend>Cart</legend>
        {Object.keys(cartValue).length > 0 ? (
          <section>
            <ol>
              {Object.entries(cartValue).map(([key, value]) => {
                let filteredArray = productDetails.filter(
                  (data) => data.id === Number(key) && cartValue[key] !== 0
                );
                return (
                  <>
                    <li key={key}>
                      {filteredArray.map((item) => {
                        const { id, image, name, price } = item;
                        return (
                          <div key={id}>
                            <img
                              src={image}
                              alt={`Product-${id}`}
                              height={50}
                              width={50}
                            />
                            <p>{name}</p>
                            <p>
                              Price: {price} Quantity: {value} Total :{" "}
                              {price * value}
                            </p>
                          </div>
                        );
                      })}
                    </li>
                    <hr />
                  </>
                );
              })}
            </ol>
          </section>
        ) : (
          <>
            <p>Your Cart is Empty</p>
            <button>
              <a href="/">Shop Now</a>
            </button>
          </>
        )}
      </fieldset>
    </>
  );
}
