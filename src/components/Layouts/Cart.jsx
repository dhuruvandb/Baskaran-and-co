import { useContext } from "react";
import { context } from "../../ContextProvider";
import productDetails from "../Data/productDetails.json";

export default function Cart() {
  const { cartValue,
    hideCart } = useContext(context);
{console.log(cartValue)}
  return (
    <>
    <button onClick={hideCart}>X</button>
    <fieldset>
      
      <legend>Cart</legend>
      {Object.keys(cartValue).length>0?<section>
        <ol>
          {Object.entries(cartValue).map(([key, value]) => {
            let filteredArray = productDetails.filter(
              (data) => data.id === Number(key) && cartValue[key]!==0
            );
            return (
              <li key={key}>
                {filteredArray.map((item) => {
                  const { id, image, name, price } = item;
                  return (
                    <div key={id}>
                      <img
                        src={image}
                        alt={`image-${id}`}
                        height={50}
                        width={50}
                      />
                      <p>{name}</p>
                      <p>
                        Price: {price} Quantity: {value} Total : {price * value}
                      </p>
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ol>
      </section>:<><p>Your Cart is Empty</p>
      <button>Shop Now</button></>}

      {/* <section>{Object.keys(cartValue).length&&Object.keys(cartValue).length>0?
        <>
          {Object.entries(cartValue).map(([key, value]) => {
            let filteredArray = productDetails.filter(
              (data) => data.id === Number(key) && value!==0
            );
            return (
              filteredArray.length>0&& <ol><li key={key}>
                {filteredArray.map((item) => {
                  const { id, image, name, price } = item;
                  return (
                    <div key={id}>
                      <img
                        src={image}
                        alt={`image-${id}`}
                        height={50}
                        width={50}
                      />
                      <p>{name}</p>
                      <p>
                        Price: {price} Quantity: {value} Total : {price * value}
                      </p>
                    </div>
                  );
                })}
             </li></ol>
             
            );
            
          })}
        </>:<><p>Your Cart is Empty</p>
      <button>Shop Now</button></>}
      </section> */}
    </fieldset>
      
    </>
  );
}
