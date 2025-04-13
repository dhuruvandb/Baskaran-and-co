import React, { FC } from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const TermsOfServicePage: FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Terms of Service</Title>
      <Paragraph>
        By using our website, you agree to these terms and conditions. Please
        read them carefully.
      </Paragraph>
      <Title level={3}>User Responsibilities</Title>
      <Paragraph>
        You are responsible for maintaining the confidentiality of your account
        and password and for restricting access to your computer.
      </Paragraph>
    </div>
  );
};

export default TermsOfServicePage;
