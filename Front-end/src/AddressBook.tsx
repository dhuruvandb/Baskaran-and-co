import React, { FC } from "react";
import { Card, Typography, Button, List } from "antd";

const { Title } = Typography;

const AddressBookPage: FC = () => {
  const addresses = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, New York, NY 10001, USA",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, Los Angeles, CA 90001, USA",
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px 0" }}>
      <Title level={2}>Address Book</Title>
      <List
        dataSource={addresses}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.name}
              extra={
                <>
                  <Button type="link">Edit</Button>
                  <Button type="link" danger>
                    Delete
                  </Button>
                </>
              }
            >
              {item.address}
            </Card>
          </List.Item>
        )}
      />
      <Button type="primary" style={{ marginTop: 16 }}>
        Add New Address
      </Button>
    </div>
  );
};

export default AddressBookPage;
