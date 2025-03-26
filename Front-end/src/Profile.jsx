import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const ProfilePage = () => {
  const onFinish = (values) => {
    console.log("Profile Updated:", values);
    alert("Profile updated successfully!");
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px 0" }}>
      <Title level={2}>Profile</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name!" }]}
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
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter new password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfilePage;
