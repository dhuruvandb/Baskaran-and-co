import React from "react";
import { Result, Button, Typography, Card, Divider } from "antd";
const { Title, Text } = Typography;

const OrderConfirmationPage = () => {
  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px 0" }}>
      <Result
        status="success"
        title="Order Placed Successfully!"
        subTitle="Thank you for shopping with us."
        extra={[
          <Button type="primary" key="home" href="/">
            Continue Shopping
          </Button>,
        ]}
      />
      <Card title="Order Details" style={{ marginTop: 20 }}>
        <Title level={4}>Order ID: #123456</Title>
        <Text strong>Items:</Text>
        <ul>
          <li>Product 1 - $20.00</li>
          <li>Product 2 - $30.00</li>
        </ul>
        <Divider />
        <Text strong>Total: $50.00</Text>
        <Text strong>Shipping Address:</Text>
        <Text>123 Main St, New York, NY 10001, USA</Text>
        <Divider />
        <Text strong>Estimated Delivery: 5-7 business days</Text>
      </Card>
    </div>
  );
};

export default OrderConfirmationPage;
