import React, { FC, useState } from "react";
import { Tabs, Form, Input, Button, message } from "antd";
import OtpVerificationPage from "./OtpVerificationPage";
import { useNavigate } from "react-router";

const { TabPane } = Tabs;

interface Login {
  email: string;
  password: string;
}

interface Signup extends Login {
  confirmPassword: string;
}
const LoginPage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login");
  const [email, setEmail] = useState<string>("");
  const [showOtpVerification, setShowOtpVerification] =
    useState<boolean>(false);
  // const navigate = useNavigate();
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleLogin = (values: Login) => {
    console.log("Login values:", values);
    // navigate(-1);
  };

  const handleSignup = (values: Signup) => {
    console.log("Signup values:", values);
    setEmail(values.email);
    setShowOtpVerification(true);
  };

  const handleOtpVerify = () => {
    message.success("Account verified successfully!");
    setShowOtpVerification(false);

    navigate(-1);
  };

  if (showOtpVerification) {
    return <OtpVerificationPage email={email} onVerify={handleOtpVerify} />;
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "50px 0" }}>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Login" key="login">
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            layout="vertical"
          >
            <Form.Item
              label="Username"
              name="email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Sign Up" key="signup">
          <Form
            name="signup"
            initialValues={{ remember: true }}
            onFinish={handleSignup}
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please input a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LoginPage;
