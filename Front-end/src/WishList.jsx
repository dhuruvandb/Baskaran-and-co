import React from "react";
import { List, Card, Typography, Button } from "antd";

const { Title } = Typography;

const WishlistPage = () => {
  const wishlistItems = [
    { id: 1, name: "Product 1", price: "$20.00" },
    { id: 2, name: "Product 2", price: "$30.00" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Wishlist</Title>
      <List
        dataSource={wishlistItems}
        renderItem={(item) => (
          <List.Item>
            <Card
              cover={
                <img alt={item.name} src="https://via.placeholder.com/150" />
              }
              actions={[<Button type="link">Move to Cart</Button>]}
            >
              <Card.Meta title={item.name} description={item.price} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default WishlistPage;
