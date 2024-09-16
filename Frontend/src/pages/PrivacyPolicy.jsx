import React from "react";
import "../styles/PrivacyPolicy.css"; // Ensure you create this CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
      </header>
      <section className="privacy-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Baskaran & Co. ("Company," "we," "our," "us"). This Privacy
          Policy describes how we collect, use, disclose, and protect your
          information when you visit our website{" "}
          <a
            href="https://www.baskaranandco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.baskaranandco.com
          </a>{" "}
          (the "Site"). By using our Site, you agree to the collection and use
          of information in accordance with this policy.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect various types of information in connection with your use of
          our Site, including:
          <ul>
            <li>
              <strong>Personal Information:</strong> Information that identifies
              you personally, such as your name, email address, phone number,
              and payment information.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              Site, including your IP address, browser type, and browsing
              behavior.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar technologies to track your activity on our Site and
              enhance your experience.
            </li>
          </ul>
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          We use your information for the following purposes:
          <ul>
            <li>To process and fulfill orders.</li>
            <li>To improve our Site and services.</li>
            <li>
              To communicate with you, including sending promotional materials
              and updates.
            </li>
            <li>
              To comply with legal obligations and protect our legal rights.
            </li>
          </ul>
        </p>

        <h2>4. How We Share Your Information</h2>
        <p>
          We may share your information in the following circumstances:
          <ul>
            <li>
              <strong>With Service Providers:</strong> We may share information
              with third-party service providers who perform services on our
              behalf, such as payment processing, shipping, and marketing.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose information if
              required by law or to protect our rights and the safety of our
              users.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a
              merger, acquisition, or other business transfer, your information
              may be transferred as part of that transaction.
            </li>
          </ul>
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You have the following choices regarding your information:
          <ul>
            <li>
              <strong>Access and Update:</strong> You can access and update your
              personal information by logging into your account or contacting
              us.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt-out of receiving promotional
              emails from us by following the instructions in those emails.
            </li>
            <li>
              <strong>Cookies:</strong> You can manage your cookie preferences
              through your browser settings.
            </li>
          </ul>
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information
          from unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the internet or electronic
          storage is 100% secure.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our Site is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we
          become aware that we have collected such information, we will take
          steps to delete it.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          Your information may be transferred to and maintained on servers
          located outside of your country. By using our Site, you consent to the
          transfer of your information to other countries.
        </p>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:support@baskaranandco.com">
            support@baskaranandco.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
