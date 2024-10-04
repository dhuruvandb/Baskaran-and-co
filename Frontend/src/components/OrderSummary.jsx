// src/components/OrderSummary.js
import React from "react";

export const OrderSummary = ({ products }) => {
  const items = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 150 },
  ];
  const shippingCost = 20;
  const tax = 15;
  const total =
    products.reduce((pre, next) => {
      return pre + next.cartValue * next.price;
    }, 0) +
    shippingCost +
    tax;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price * item.cartValue}
          </li>
        ))}
      </ul>
      <p>Shipping: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h4>Total: ${total}</h4>
    </div>
  );
};
