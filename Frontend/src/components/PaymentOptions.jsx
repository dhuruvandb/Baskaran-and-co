// src/components/PaymentOptions.js
import React from "react";

export const PaymentOptions = ({ setPaymentMethod }) => {
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="payment-options">
      <h3>Payment Options</h3>
      <form>
        <label>
          <input
            type="radio"
            name="payment"
            value="creditCard"
            onChange={handlePaymentChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="paypal"
            onChange={handlePaymentChange}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="applePay"
            onChange={handlePaymentChange}
          />
          Apple Pay
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="googlePay"
            onChange={handlePaymentChange}
          />
          Google Pay
        </label>
      </form>
    </div>
  );
};
