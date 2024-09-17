// src/components/OrderHistory.js
import React from "react";
import "../styles/OrderHistory.css";

export default function OrderHistory() {
  const orders = [
    { id: 1, date: "2024-08-01", total: 150.0, status: "Delivered", items: 3 },
    { id: 2, date: "2024-07-15", total: 250.0, status: "Shipped", items: 5 },
    { id: 3, date: "2024-06-25", total: 100.0, status: "Processing", items: 2 },
  ]; // Example order data

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>{order.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
