import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutUsPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>About Us</Title>
      <Paragraph>
        Welcome to our e-commerce store! We are dedicated to providing
        high-quality products and excellent customer service. Our mission is to
        make online shopping easy, enjoyable, and secure for everyone.
      </Paragraph>
      <Title level={3}>Our Team</Title>
      <Paragraph>
        Meet the talented individuals behind our success. We are a team of
        passionate professionals committed to delivering the best shopping
        experience.
      </Paragraph>
    </div>
  );
};

export default AboutUsPage;
