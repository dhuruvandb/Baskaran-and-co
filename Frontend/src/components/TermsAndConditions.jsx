import { useEffect, useState } from "react";

export const TermsAndConditions = ({ Agree, Decline }) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  const handleScroll = (event) => {
    const scrollHeight = event.target.scrollHeight;
    const scrollTop = event.target.scrollTop;
    const height = event.target.offsetHeight;

    if (scrollTop + height >= scrollHeight) {
      console.log("bottom");
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };
  return (
    <div style={{ width: "500px" }} onScroll={handleScroll}>
      <h1>Terms and Conditions</h1>

      <h2>Acceptance</h2>

      <p>
        By accessing or using the Website, you agree to be bound by these Terms.
        If you disagree with any part of the terms then you may not access the
        Website.
      </p>

      <h2>Content</h2>

      <p>
        We own all intellectual property rights to the Website and its content.
        This includes, but is not limited to, trademarks, copyrights, and
        patents. You may not use our content without our prior written
        permission.
      </p>

      <h2>User Conduct</h2>

      <p>
        You agree to use the Website in a lawful and respectful manner. You are
        prohibited from:
      </p>
      <ul>
        <li>Uploading any illegal or harmful content.</li>
        <li>Violating the privacy of other users.</li>
      </ul>

      <h2>Termination</h2>

      <p>
        We may terminate your access to the Website at any time, for any reason,
        without prior notice.
      </p>

      <h2>Disclaimer</h2>

      <p>
        warranties. We do not warrant that the Website will be uninterrupted,
        error-free, or virus-free.
      </p>

      <h2>Limitation of Liability</h2>

      <p>
        In no event shall we be liable for any damages arising from your use of
        the Website.
      </p>

      <h2>Governing Law</h2>

      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of [Your State].
      </p>

      <h2>Changes to These Terms</h2>

      <p>
        We may update these Terms at any time. We will notify you of any changes
        by posting the new Terms on the Website. You are advised to review these
        Terms periodically for any changes.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions about these Terms, please contact us at [your
        email address].
      </p>
      <button onClick={Agree}>Agree</button>
      <a onClick={Decline}>Decline</a>
    </div>
  );
};
