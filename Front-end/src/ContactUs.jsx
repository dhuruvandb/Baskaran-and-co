import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const ContactUsPage = () => {
  const onFinish = (values) => {
    console.log("Contact Form Submitted:", values);
    alert("Thank you for contacting us!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Contact Us</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="john.doe@example.com" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message!" }]}
        >
          <Input.TextArea placeholder="Your message..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUsPage;
