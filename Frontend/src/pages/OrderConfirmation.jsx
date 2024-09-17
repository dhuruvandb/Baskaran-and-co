// src/components/OrderConfirmation.js
import React from "react";
import "../styles/OrderConfirmation.css";

export default function OrderConfirmation() {
  const orderNumber = "123456"; // Example order number
  const orderDetails = [
    { id: 1, name: "Product 1", quantity: 2, price: 100 },
    { id: 2, name: "Product 2", quantity: 1, price: 200 },
  ]; // Example order details
  const paymentConfirmed = true;
  const trackingLink = "#"; // Replace with actual tracking URL

  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>

      <section className="order-number">
        <h3>Order Number: {orderNumber}</h3>
      </section>

      <section className="order-details">
        <h3>Order Details</h3>
        <ul>
          {orderDetails.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            </li>
          ))}
        </ul>
      </section>

      <section className="payment-confirmation">
        <h3>Payment Confirmation</h3>
        <p>
          {paymentConfirmed
            ? "Your payment was successful!"
            : "Payment failed. Please try again."}
        </p>
      </section>

      {trackingLink && (
        <section className="shipping-tracking">
          <h3>Shipping Tracking Information</h3>
          <a href={trackingLink}>Track your order</a>
        </section>
      )}

      <section className="thank-you-message">
        <h3>Thank You!</h3>
        <p>Thank you for your purchase. We hope you enjoy your products!</p>
      </section>
    </div>
  );
}
