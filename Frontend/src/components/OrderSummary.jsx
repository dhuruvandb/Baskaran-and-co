// src/components/OrderSummary.js
import React from "react";

export const OrderSummary = () => {
  const items = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 150 },
  ];
  const shippingCost = 20;
  const tax = 15;
  const total =
    items.reduce((sum, item) => sum + item.price, 0) + shippingCost + tax;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Shipping: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h4>Total: ${total}</h4>
    </div>
  );
};
