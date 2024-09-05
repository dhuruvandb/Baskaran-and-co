// src/components/ShippingInfo.js
import React, { useState } from "react";

export const ShippingInfo = ({ setShippingInfo }) => {
  const [shippingData, setShippingData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
    setShippingInfo({ ...shippingData, [name]: value });
  };

  return (
    <div className="shipping-info">
      <h3>Shipping Information</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
