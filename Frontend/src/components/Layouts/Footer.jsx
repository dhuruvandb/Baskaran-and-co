// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are committed to providing the best products at the best prices.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>
            Sign up for our newsletter to get the latest updates and offers.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Payment Methods</h3>
          <div className="payment-methods">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="paypal.png" alt="PayPal" />
            {/* Add more payment method icons as needed */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Your E-commerce Site. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
