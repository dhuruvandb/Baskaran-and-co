import React from "react";
import { Spin, Typography } from "antd";

const { Title } = Typography;

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        flexDirection: "column",
        gap: 16,
        backgroundColor: "#f0f2f5", // Light background color
      }}
    >
      <Spin size="large" />
      <Title level={4} style={{ color: "#1890ff", margin: 0 }}>
        Loading...
      </Title>
    </div>
  );
};

export default Loading;
