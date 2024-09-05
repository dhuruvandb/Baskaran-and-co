// src/components/CheckoutForm.js
import React, { useState } from "react";
import { ShippingInfo } from "../components/ShippingInfo";
import { BillingInfo } from "../components/BillingInfo";
import { PaymentOptions } from "../components/PaymentOptions";
import { OrderSummary } from "../components/OrderSummary";
import "../styles/Checkout.css"; // Create CheckoutForm.css for styling

export const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({});
  const [billingInfo, setBillingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {
    console.log("Order placed!", { shippingInfo, billingInfo, paymentMethod });
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <ShippingInfo setShippingInfo={setShippingInfo} />
      <BillingInfo setBillingInfo={setBillingInfo} />
      <PaymentOptions setPaymentMethod={setPaymentMethod} />
      <OrderSummary />
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};
