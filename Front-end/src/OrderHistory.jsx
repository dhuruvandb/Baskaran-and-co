import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;

const OrderHistoryPage = () => {
  const orders = [
    {
      key: "1",
      orderId: "123456",
      date: "2023-10-01",
      total: "$50.00",
      status: "Delivered",
    },
    {
      key: "2",
      orderId: "789012",
      date: "2023-09-25",
      total: "$30.00",
      status: "Shipped",
    },
  ];

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px 0" }}>
      <Title level={2}>Order History</Title>
      <Table dataSource={orders} columns={columns} pagination={false} />
    </div>
  );
};

export default OrderHistoryPage;
