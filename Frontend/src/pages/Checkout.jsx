// src/components/CheckoutForm.js
import React, { useState } from "react";
import { ShippingInfo } from "../components/ShippingInfo";
import { OrderSummary } from "../components/OrderSummary";
import "../styles/Checkout.css"; // Create CheckoutForm.css for styling
import { cartItems } from "../components/store/Selectors/cart-selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectBuyNowProducts } from "../components/store/Selectors/product-selectors";
import { Link, useNavigate } from "react-router-dom";
import { removeProductFromBuyNow } from "../components/store/Slices/product-slice";
import { Button } from "@mui/material";

export default function Checkout() {
  const [shippingInfo, setShippingInfo] = useState({});
  const [billingInfo, setBillingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const cartProducts = useSelector(cartItems);
  const buyNowproducts = useSelector(selectBuyNowProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    console.log("Order placed!", { shippingInfo, billingInfo, paymentMethod });
    alert("Order placed successfully!");
  };

  if (buyNowproducts.some((product) => product.cartValue < 1)) {
    dispatch(removeProductFromBuyNow(buyNowproducts[0]._id));
    navigate(-1);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <ShippingInfo setShippingInfo={setShippingInfo} />

      {cartProducts.length > 0 || buyNowproducts.length > 0 ? (
        <OrderSummary
          products={buyNowproducts.length === 0 ? cartProducts : buyNowproducts}
        />
      ) : (
        <>
          <br />
          <Link to="/">
            <Button>Shop Now</Button>
          </Link>
          <p>Shop above 199 to get Free delivery</p>
        </>
      )}
      {(cartProducts.length > 0 || buyNowproducts.length > 0) && (
        <button className="place-order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
}
