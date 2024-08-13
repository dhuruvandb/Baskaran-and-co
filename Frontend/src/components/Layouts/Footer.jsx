import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company and mission.</p>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <p>Get help and support for your orders.</p>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <p>Follow us on social media for updates.</p>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Get the latest news and offers straight to your inbox.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your E-commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
