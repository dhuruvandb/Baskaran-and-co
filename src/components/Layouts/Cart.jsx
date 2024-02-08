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
            const filteredArray = productDetails.filter(
              (item) => item.id === key
            );
            return <li>{filteredArray}</li>;
          })}
        </ol>
      </section>
    </>
  );
}
