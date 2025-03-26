import React, { useState } from "react";
import { Form, Input, Button, Card, Divider, Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

const Checkout = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);

  // Mock saved addresses (replace with data from your backend)
  const savedAddresses = [
    {
      id: 1,
      fullName: "John Doe",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      phone: "+1 123 456 7890",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      addressLine1: "456 Elm St",
      addressLine2: "",
      city: "Los Angeles",
      state: "CA",
      zip: "90001",
      country: "USA",
      phone: "+1 987 654 3210",
    },
  ];

  const handlePlaceOrder = (values) => {
    setLoading(true);
    console.log("Order Details:", values);
    // Simulate API call for placing the order
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully!");
      // Redirect to order confirmation page
    }, 2000);
  };

  const handleAddressChange = (value) => {
    if (value === "new") {
      setShowAddressForm(true); // Show form for new address
      form.resetFields(); // Clear form fields
    } else {
      setShowAddressForm(false); // Hide form
      const selectedAddress = savedAddresses.find((addr) => addr.id === value);
      form.setFieldsValue(selectedAddress); // Autofill form with selected address
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "20px 0" }}>
      <Title level={2}>Checkout</Title>
      <Card title="Order Summary" style={{ marginBottom: 20 }}>
        <Text strong>Items:</Text>
        <ul>
          <li>Product 1 - $20.00</li>
          <li>Product 2 - $30.00</li>
        </ul>
        <Divider />
        <Text strong>Total: $50.00</Text>
      </Card>

      <Form form={form} layout="vertical" onFinish={handlePlaceOrder}>
        <Card title="Shipping Address" style={{ marginBottom: 20 }}>
          <Form.Item
            label="Select Address"
            name="addressId"
            rules={[{ required: true, message: "Please select an address!" }]}
          >
            <Select
              placeholder="Select a saved address"
              onChange={handleAddressChange}
            >
              {savedAddresses.map((address) => (
                <Option key={address.id} value={address.id}>
                  {`${address.fullName}, ${address.addressLine1}, ${address.city}, ${address.state} ${address.zip}`}
                </Option>
              ))}
              <Option value="new">Enter a new address</Option>
            </Select>
          </Form.Item>

          {showAddressForm && (
            <>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  { required: true, message: "Please enter your full name!" },
                ]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                label="Address Line 1"
                name="addressLine1"
                rules={[
                  { required: true, message: "Please enter your address!" },
                ]}
              >
                <Input placeholder="123 Main St" />
              </Form.Item>
              <Form.Item label="Address Line 2" name="addressLine2">
                <Input placeholder="Apt 4B" />
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter your city!" }]}
              >
                <Input placeholder="New York" />
              </Form.Item>
              <Form.Item
                label="State/Province"
                name="state"
                rules={[
                  { required: true, message: "Please enter your state!" },
                ]}
              >
                <Input placeholder="NY" />
              </Form.Item>
              <Form.Item
                label="ZIP/Postal Code"
                name="zip"
                rules={[
                  { required: true, message: "Please enter your ZIP code!" },
                ]}
              >
                <Input placeholder="10001" />
              </Form.Item>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  { required: true, message: "Please enter your country!" },
                ]}
              >
                <Input placeholder="USA" />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input placeholder="+1 123 456 7890" />
              </Form.Item>
            </>
          )}
        </Card>

        <Button type="primary" htmlType="submit" block loading={loading}>
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
