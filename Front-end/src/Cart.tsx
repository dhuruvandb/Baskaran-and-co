import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  List,
  Card,
  Button,
  InputNumber,
  Typography,
  Divider,
  Space,
  Tag,
  Image,
  Alert,
} from "antd";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const { Content } = Layout;
const { Title, Text } = Typography;

// Define item and cart interfaces
interface CartItem {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface UserCart {
  _id: string;
  items: CartItem[];
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<UserCart[]>([]);
  const [refreshCart, setRefreshCart] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fetch cart data
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const result = await axios.get<{ userCart: UserCart }>(
          "http://localhost:5000/cart/getcart/6798d6506f5c44e9ffe75d99"
        );
        setCartItems([result.data.userCart]);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [refreshCart]);

  // Calculate totals
  const subtotal =
    cartItems?.reduce((total, data) => {
      return (
        total +
        (data.items?.reduce((sum, item) => {
          return sum + (item.price ?? 0) * (item.quantity ?? 0);
        }, 0) ?? 0)
      );
    }, 0) ?? 0;

  const shipping = subtotal > 0 && subtotal < 100 ? 15 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // Handle quantity change
  const handleQuantityChange = async (id: string, value: number | null) => {
    if (value && value > 0) {
      try {
        await axios.post("http://localhost:5000/cart/updatecart", {
          userId: "6798d6506f5c44e9ffe75d99",
          items: { quantity: value, _id: id },
        });
        setRefreshCart((prev) => !prev);
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
  };

  // Handle item removal
  const handleRemoveItem = async (id: string) => {
    try {
      await axios.delete(
        `http://localhost:5000/cart/deletecart/6798d6506f5c44e9ffe75d99/${id}`
      );
      setRefreshCart((prev) => !prev);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "50px 50px" }}>
        {cartItems.length === 0 || cartItems[0].items.length === 0 ? (
          <Alert
            message="Your cart is empty"
            description={
              <Link to="/">
                <Button type="primary">Continue Shopping</Button>
              </Link>
            }
            type="info"
            showIcon
          />
        ) : (
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={16}>
              <List
                itemLayout="vertical"
                dataSource={cartItems}
                renderItem={(cartItem) => (
                  <div key={cartItem._id}>
                    <List
                      itemLayout="vertical"
                      dataSource={cartItem.items}
                      renderItem={(item) => (
                        <List.Item key={item._id}>
                          <List.Item.Meta
                            avatar={
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={120}
                                height={120}
                                style={{ objectFit: "contain" }}
                              />
                            }
                            title={
                              <Link to={`/product/${item._id}`}>
                                {item.title}
                              </Link>
                            }
                            description={
                              <Space direction="vertical">
                                <Text
                                  type={
                                    item.quantity > 0 ? "secondary" : "danger"
                                  }
                                >
                                  {item.quantity > 0
                                    ? "In Stock"
                                    : "Out of Stock"}
                                </Text>
                              </Space>
                            }
                          />
                          <div style={{ textAlign: "right" }}>
                            <Text strong style={{ fontSize: 18 }}>
                              ${(item.price * item.quantity).toFixed(2)}
                            </Text>
                            <div style={{ marginTop: 8 }}>
                              <InputNumber
                                min={1}
                                defaultValue={item.quantity}
                                onChange={(value) =>
                                  handleQuantityChange(item._id, value)
                                }
                                style={{ width: 100 }}
                              />
                              <Text type="secondary" style={{ marginLeft: 8 }}>
                                ${item.price.toFixed(2)} each
                              </Text>
                            </div>
                          </div>
                          <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => handleRemoveItem(item._id)}
                          >
                            Remove
                          </Button>
                        </List.Item>
                      )}
                    />
                  </div>
                )}
              />
            </Col>

            <Col xs={24} lg={8}>
              <Card
                title="Order Summary"
                headStyle={{ fontSize: 18, fontWeight: "bold" }}
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Row justify="space-between">
                    <Text>Subtotal: {cartItems[0].items.length} Items</Text>
                    <Text strong>${subtotal.toFixed(2)}</Text>
                  </Row>
                  <Row justify="space-between">
                    <Text>Shipping:</Text>
                    <Text strong>
                      {shipping === 0 ? (
                        <Tag color="green">FREE</Tag>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </Text>
                  </Row>
                  <Row justify="space-between">
                    <Text>Tax (10%):</Text>
                    <Text strong>${tax.toFixed(2)}</Text>
                  </Row>
                  <Divider />
                  <Row justify="space-between">
                    <Title level={4}>Total:</Title>
                    <Title level={4}>${total.toFixed(2)}</Title>
                  </Row>
                  <Divider />
                  <Button
                    type="primary"
                    size="large"
                    block
                    style={{ height: 50, fontSize: 16 }}
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button
                    block
                    icon={<ArrowLeftOutlined />}
                    style={{ marginTop: 16 }}
                    onClick={() => window.history.back()}
                  >
                    Continue Shopping
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
};

export default Cart;
