import { useContext } from "react";
import { context } from "../../ContextProvider";
import productDetails from "../Data/productDetails.json";

export default function Cart() {
  const { cartValue } = useContext(context);

  return (
    <>
      <section>
        <ol>
        {Object.entries(cartValue).map(([key, value]) => {
  let filteredArray = productDetails.filter(data =>
    data.id === Number(key)
  );
  return (
    <li key={key}>
      {filteredArray.map(item => {
        const {id,image,name,price} = item;
        <div key={id}>
          <img src={image} alt={`image-${id}`} />
          <p>Name: {name}</p>
          <p>Price: {price} Quantity: {value} Total : {price*value}</p>
        </div>
        })}
    </li>
  );
})}

        </ol>
      </section>
    </>
  );
}
