// src/components/OrderSummary.js
import React from "react";

export const OrderSummary = ({ products }) => {
  const shippingCost = 20;
  const productTotal = products.reduce((pre, next) => {
    return pre + next.cartValue * next.price;
  }, 0);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.cartValue}</td>
              <td>₹{(item.price * item.cartValue).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>
              Shipping <br />
              <small>
                <strong>
                  <i>Free delivery on orders above 199</i>
                </strong>
              </small>
            </td>
            <td></td>
            {productTotal < 199 ? (
              <td>₹{shippingCost.toFixed(2)}</td>
            ) : (
              <td>
                ₹<del>{shippingCost.toFixed(2)}</del>
                <br /> <span>Free</span>
              </td>
            )}
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td>
              <strong>
                ₹
                {productTotal < 199
                  ? (productTotal + shippingCost).toFixed(2)
                  : productTotal.toFixed(2)}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
