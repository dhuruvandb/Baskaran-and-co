// src/components/BillingInfo.js
import React, { useState } from "react";

export const BillingInfo = ({ setBillingInfo }) => {
  const [billingData, setBillingData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [sameAsShipping, setSameAsShipping] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingData({ ...billingData, [name]: value });
    setBillingInfo({ ...billingData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setSameAsShipping(!sameAsShipping);
    if (!sameAsShipping) {
      // Copy data from shipping (in a real app, you'd actually copy the state)
      setBillingInfo(billingData);
    }
  };

  return (
    <div className="billing-info">
      <h3>Billing Information</h3>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Same as Shipping
      </label>
      {!sameAsShipping && (
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
      )}
    </div>
  );
};
