import React, { useEffect } from "react";
import "../styles/TermsOfService.css"; // Ensure you create this CSS file for styling

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <header className="terms-header">
        <h1>Terms of Service</h1>
      </header>
      <section className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Baskaran & Co. ("Company," "we," "our," "us"). These Terms
          of Service ("Terms") govern your access to and use of our website,
          including any content, functionality, and services offered on or
          through{" "}
          <a
            href="https://www.baskaranandco.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.baskaranandco.com
          </a>{" "}
          (the "Site"). Please read these Terms carefully before using our Site.
        </p>

        <h2>2. Acceptance of Terms</h2>
        <p>
          By accessing or using our Site, you agree to be bound by these Terms
          and our Privacy Policy. If you do not agree to these Terms, you must
          not use our Site.
        </p>

        <h2>3. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time
          without prior notice. Your continued use of the Site following the
          posting of changes constitutes your acceptance of such changes. It is
          your responsibility to review these Terms periodically.
        </p>

        <h2>4. Eligibility</h2>
        <p>
          To use our Site, you must be at least 18 years old or the age of
          majority in your jurisdiction. By using our Site, you represent and
          warrant that you meet this requirement.
        </p>

        <h2>5. Account Registration</h2>
        <p>
          To access certain features of the Site, you may be required to create
          an account. You agree to provide accurate, current, and complete
          information during the registration process and to update such
          information to keep it accurate, current, and complete. You are
          responsible for safeguarding your account password and for all
          activities that occur under your account.
        </p>

        <h2>6. User Responsibilities</h2>
        <p>
          You agree not to:
          <ul>
            <li>Use the Site for any illegal or unauthorized purpose.</li>
            <li>
              Interfere with or disrupt the Site or servers or networks
              connected to the Site.
            </li>
            <li>
              Transmit any content that is unlawful, defamatory, obscene, or
              otherwise objectionable.
            </li>
            <li>
              Attempt to gain unauthorized access to any portion of the Site or
              other accounts, systems, or networks connected to the Site.
            </li>
          </ul>
        </p>

        <h2>7. Product Information and Availability</h2>
        <p>
          We strive to provide accurate product descriptions and pricing.
          However, we do not guarantee that all product descriptions, pricing,
          or other content on our Site are accurate, complete, or error-free. We
          reserve the right to correct any errors and to change or update
          information without prior notice.
        </p>

        <h2>8. Orders and Payment</h2>
        <p>
          All orders are subject to acceptance and availability. We reserve the
          right to refuse or cancel any order at our discretion. Payment must be
          made through our approved payment methods. You agree to provide
          accurate and complete payment information for all purchases.
        </p>

        <h2>9. Shipping and Delivery</h2>
        <p>
          Shipping and delivery times are estimates and are not guaranteed. We
          are not responsible for any delays or damages that occur during
          shipping. Please refer to our Shipping Policy for more details.
        </p>

        <h2>10. Returns and Refunds</h2>
        <p>
          Our Return Policy outlines the terms and conditions for returns and
          refunds. Please review our Return Policy to understand your rights and
          obligations regarding returns and refunds.
        </p>

        <h2>11. Intellectual Property</h2>
        <p>
          All content on the Site, including text, graphics, logos, images, and
          software, is the property of Baskaran & Co. or its licensors and is
          protected by intellectual property laws. You may not use any content
          from the Site without our express written permission.
        </p>

        <h2>12. Third-Party Links</h2>
        <p>
          Our Site may contain links to third-party websites or services that
          are not owned or controlled by us. We are not responsible for the
          content, privacy policies, or practices of any third-party websites or
          services. You access third-party websites at your own risk.
        </p>

        <h2>13. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Baskaran & Co. and its
          affiliates, officers, directors, employees, and agents shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising from or related to your use of the Site or
          any products or services purchased through the Site.
        </p>

        <h2>14. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Baskaran & Co., its
          affiliates, and their respective officers, directors, employees, and
          agents from and against any claims, liabilities, damages, losses, and
          expenses (including reasonable attorneys' fees) arising out of or
          related to your use of the Site or violation of these Terms.
        </p>

        <h2>15. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State in which Baskaran & Co. is incorporated, without
          regard to its conflict of law principles. Any disputes arising under
          or in connection with these Terms shall be resolved in the state or
          federal courts located in that State.
        </p>

        <h2>16. Dispute Resolution</h2>
        <p>
          Any disputes or claims arising from or related to these Terms or your
          use of the Site will be resolved through binding arbitration in
          accordance with the rules of the American Arbitration Association. The
          arbitration will take place in the State where Baskaran & Co. is
          incorporated.
        </p>

        <h2>17. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the Site,
          in our sole discretion, without notice, for any reason, including for
          violation of these Terms.
        </p>

        <h2>18. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:support@baskaranandco.com">
            support@baskaranandco.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
