import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const OtpVerificationPage = ({ email, onVerify }) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate OTP verification process
    setTimeout(() => {
      if (otp === "123456") {
        // Replace with the actual OTP generated during signup
        message.success("OTP verified successfully!");
        onVerify();
        
      } else {
        message.error("Invalid OTP. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "50px 0" }}>
      <h2>OTP Verification</h2>
      <p>We have sent a 6-digit OTP to your email: {email}</p>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Enter OTP"
          name="otp"
          rules={[
            { required: true, message: "Please input the OTP!" },
            { len: 6, message: "OTP must be 6 digits!" },
          ]}
        >
          <Input
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Verify OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OtpVerificationPage;
