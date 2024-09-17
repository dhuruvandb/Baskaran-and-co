// src/components/UserAccount.js
import React, { useState } from "react";
// import "../styles/UserAccount.css";

export default function UserAccount() {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City, State, 12345",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="user-account">
      <h1>User Account</h1>

      {/* Account Overview */}
      <section className="account-overview">
        <h2>Account Overview</h2>
        <div className="overview-item">
          <p>
            <strong>Membership Status:</strong> Premium Member
          </p>
          <p>
            <strong>Loyalty Points:</strong> 1200 Points
          </p>
        </div>
      </section>

      {/* Personal Information */}
      <section className="account-info">
        <h2>Personal Information</h2>
        <div className="info-item">
          <label>Name:</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
            />
          ) : (
            <p>{userInfo.name}</p>
          )}
        </div>
        <div className="info-item">
          <label>Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
          ) : (
            <p>{userInfo.email}</p>
          )}
        </div>
        <div className="info-item">
          <label>Phone:</label>
          {editMode ? (
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
            />
          ) : (
            <p>{userInfo.phone}</p>
          )}
        </div>
        <div className="info-item">
          <label>Address:</label>
          {editMode ? (
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
            />
          ) : (
            <p>{userInfo.address}</p>
          )}
        </div>
        <button className="edit-btn" onClick={handleEditClick}>
          {editMode ? "Save Changes" : "Edit Information"}
        </button>
      </section>

      {/* Order History */}
      <section className="order-history">
        <h2>Order History</h2>
        <div className="order-item">
          <p>
            <strong>Order #12345</strong>
          </p>
          <p>Status: Shipped</p>
          <a href="https://track-shipment.com/12345">Track Order</a>
        </div>
        <div className="order-item">
          <p>
            <strong>Order #12346</strong>
          </p>
          <p>Status: Processing</p>
        </div>
      </section>

      {/* Saved Payment Methods */}
      <section className="payment-methods">
        <h2>Saved Payment Methods</h2>
        <div className="payment-item">
          <p>
            <strong>Visa **** 1234</strong>
          </p>
          <button className="remove-btn">Remove</button>
        </div>
        <button className="add-payment-btn">Add New Payment Method</button>
      </section>

      {/* Password Management */}
      <section className="password-management">
        <h2>Password Management</h2>
        <div className="password-item">
          <label>Current Password:</label>
          <input type="password" />
        </div>
        <div className="password-item">
          <label>New Password:</label>
          <input type="password" />
        </div>
        <div className="password-item">
          <label>Confirm New Password:</label>
          <input type="password" />
        </div>
        <button className="password-btn">Change Password</button>
      </section>
    </div>
  );
}
