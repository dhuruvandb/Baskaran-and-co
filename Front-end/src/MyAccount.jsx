import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Title } = Typography;

const MyAccount = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px 0" }}>
      <Title level={2}>My Account</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            title="Profile"
            bordered={false}
            actions={[
              <Button
                type="primary"
                onClick={() => handleNavigation("/my-account/profile")}
              >
                Manage Profile
              </Button>,
            ]}
          >
            Update your personal information, such as name, email, and password.
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Order History"
            bordered={false}
            actions={[
              <Button
                type="primary"
                onClick={() => handleNavigation("/my-account/orders")}
              >
                View Orders
              </Button>,
            ]}
          >
            View your past orders, track shipments, and manage returns.
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Address Book"
            bordered={false}
            actions={[
              <Button
                type="primary"
                onClick={() => handleNavigation("/my-account/addresses")}
              >
                Manage Addresses
              </Button>,
            ]}
          >
            Add, edit, or remove saved addresses for faster checkout.
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Wishlist"
            bordered={false}
            actions={[
              <Button
                type="primary"
                onClick={() => handleNavigation("/wishlist")}
              >
                Manage Wishlist
              </Button>,
            ]}
          >
            Add, edit, or remove saved Wishlist for faster checkout.
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="Logout"
            bordered={false}
            actions={[
              <Button
                type="primary"
                danger
                onClick={() => handleNavigation("/logout")}
              >
                Logout
              </Button>,
            ]}
          >
            Logout from your account.
          </Card>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
};

export default MyAccount;
