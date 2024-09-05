// src/components/ProfileManagement.js
import React, { useState } from "react";
import "../styles/ProfileManagement.css";

export const ProfileManagement = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  const [password, setPassword] = useState("");
  const [shippingAddress, setShippingAddress] = useState({
    address: "123 Main St",
    city: "Anytown",
    state: "Anystate",
    zip: "12345",
    country: "USA",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-management">
      <h2>Profile Management</h2>

      <form onSubmit={handleSubmit}>
        <section className="personal-info">
          <h3>Edit Personal Information</h3>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
            />
          </label>
        </section>

        <section className="change-password">
          <h3>Change Password</h3>
          <label>
            New Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </section>

        <section className="shipping-address">
          <h3>Manage Shipping Address</h3>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={shippingAddress.address}
              onChange={handleAddressChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={shippingAddress.city}
              onChange={handleAddressChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={shippingAddress.state}
              onChange={handleAddressChange}
            />
          </label>
          <label>
            ZIP Code:
            <input
              type="text"
              name="zip"
              value={shippingAddress.zip}
              onChange={handleAddressChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={shippingAddress.country}
              onChange={handleAddressChange}
            />
          </label>
        </section>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
