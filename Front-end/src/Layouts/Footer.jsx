import React from "react";
import { Layout, Typography, Row, Col, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#001529",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <Row gutter={[24, 24]}>
        {/* About Us */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            About Us
          </Title>
          <Text style={{ color: "white" }}>
            We are dedicated to providing high-quality products and excellent
            customer service. Shop with us for the best online shopping
            experience.
          </Text>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            Quick Links
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/categories" style={{ color: "white" }}>
                Categories
              </a>
            </li>
            <li>
              <a href="/about" style={{ color: "white" }}>
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </Col>

        {/* Contact Info */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            Contact Us
          </Title>
          <Text style={{ color: "white" }}>
            Email: support@myecommerce.com
            <br />
            Phone: +1 123 456 7890
            <br />
            Address: 123 Main St, New York, NY 10001
          </Text>
        </Col>

        {/* Social Media */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>
            Follow Us
          </Title>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://facebook.com" style={{ color: "white" }}>
              <FacebookOutlined style={{ fontSize: 24 }} />
            </a>
            <a href="https://twitter.com" style={{ color: "white" }}>
              <TwitterOutlined style={{ fontSize: 24 }} />
            </a>
            <a href="https://instagram.com" style={{ color: "white" }}>
              <InstagramOutlined style={{ fontSize: 24 }} />
            </a>
            <a href="https://linkedin.com" style={{ color: "white" }}>
              <LinkedinOutlined style={{ fontSize: 24 }} />
            </a>
          </div>
        </Col>
      </Row>

      {/* Divider */}
      <Divider style={{ borderColor: "white" }} />

      {/* Copyright */}
      <Text style={{ textAlign: "center", display: "block", color: "white" }}>
        © 2023 My E-Commerce. All rights reserved.
      </Text>
    </Footer>
  );
};

export default AppFooter;
