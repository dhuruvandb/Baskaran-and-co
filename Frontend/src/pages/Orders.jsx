import React from "react";
import "../styles/Orders.css"; // Ensure you create this CSS file for styling
import { Link } from "react-router-dom";

const Orders = () => {
  const orders = [
    { id: "001", status: "Shipped", total: 59.99, date: "2024-09-01" },
    { id: "002", status: "Processing", total: 24.5, date: "2024-09-10" },
  ];

  return (
    <div className="orders-page">
      <header className="orders-header">
        <h1>Your Orders</h1>
      </header>
      <section className="orders-content">
        {orders.length === 0 ? (
          <p>You have no current orders.</p>
        ) : (
          <ul className="orders-list">
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <h2>Order #{order.id}</h2>
                <p>Status: {order.status}</p>
                <p>Total: ${order.total.toFixed(2)}</p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
        <div className="orders-footer">
          <Link to="/order-history" className="link-button">
            View Order History
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Orders;
