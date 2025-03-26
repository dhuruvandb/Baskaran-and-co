import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const PrivacyPolicyPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Privacy Policy</Title>
      <Paragraph>
        Your privacy is important to us. This privacy policy explains how we
        collect, use, and protect your personal information.
      </Paragraph>
      <Title level={3}>Data Collection</Title>
      <Paragraph>
        We collect information such as your name, email address, and payment
        details to process your orders and improve your shopping experience.
      </Paragraph>
    </div>
  );
};

export default PrivacyPolicyPage;
