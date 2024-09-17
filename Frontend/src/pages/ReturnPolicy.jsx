// src/components/ReturnPolicy.js
import React from "react";
import "../styles/ReturnPolicy.css";

export default function ReturnPolicy() {
  return (
    <div className="return-policy">
      <section className="policy-header">
        <h1>Return Policy</h1>
        <p>
          We aim to make the return process simple and easy for you. Please read
          our return policy below.
        </p>
      </section>

      <section className="policy-details">
        <h2>Eligibility for Returns</h2>
        <ul>
          <li>Items must be returned within 30 days of receipt.</li>
          <li>
            Products must be unused, in their original packaging, and with all
            tags intact.
          </li>
          <li>Proof of purchase is required for all returns.</li>
        </ul>
      </section>

      <section className="return-process">
        <h2>How to Return an Item</h2>
        <ol>
          <li>
            Contact our support team at{" "}
            <a href="mailto:support@yourstore.com">support@yourstore.com</a>.
          </li>
          <li>Package the item securely, including the receipt.</li>
          <li>Ship the item back to us using a tracked shipping method.</li>
        </ol>
      </section>

      <section className="refund-info">
        <h2>Refunds</h2>
        <p>
          Once we receive your return, we will inspect the item and notify you
          of the approval or rejection of your refund. If approved, your refund
          will be processed within 5-7 business days, and a credit will
          automatically be applied to your original payment method.
        </p>
      </section>

      <section className="exchange-info">
        <h2>Exchanges</h2>
        <p>
          If you need to exchange an item for a different size, color, or model,
          please contact us at{" "}
          <a href="mailto:support@yourstore.com">support@yourstore.com</a> and
          follow the return process. We will ship the replacement item after we
          receive the original.
        </p>
      </section>

      <section className="center-contact">
        <h2>Return Center Contact Information</h2>
        <p>
          If you have any questions about your return or need further
          assistance, feel free to contact us:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:returncenter@yourstore.com">
              returncenter@yourstore.com
            </a>
          </li>
          <li>Phone: +1 (800) 123-4567</li>
          <li>Address: 123 Return Center Blvd, City, State, ZIP Code</li>
        </ul>
      </section>
    </div>
  );
}
