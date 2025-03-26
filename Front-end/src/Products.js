import { useState, useEffect } from "react";
import {
  Layout,
  Pagination,
  Row,
  Col,
  Card,
  Skeleton,
  Typography,
  Tag,
  Rate,
  Alert,
  Image,
  Space,
} from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";

const { Content } = Layout;
const { Title, Text } = Typography;

function Products() {
  const [products, setProducts] = useState([]);
  const { page = 1, category } = useParams();
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `http://localhost:5000/products?page=${page}&limit=10&category=${category}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, page]);

  const handlePageChange = (newPage) => {
    window.location.href = `/page/${newPage}`;
    window.scrollTo(0, 0);
  };

  const renderProductDetails = (product) => (
    <Card
      hoverable
      style={{
        borderRadius: 8,
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      cover={
        <Image
          src={product.thumbnail}
          alt={product.title}
          style={{ objectFit: "contain", width: "100%", height: 200 }}
          placeholder={<Skeleton.Image active />}
        />
      }
    >
      <Skeleton active loading={loading}>
        <Title level={4} ellipsis={{ rows: 2 }}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </Title>
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <Space size="small" style={{ alignItems: "center" }}>
            <Text strong style={{ fontSize: 18 }}>
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </Text>
            {product.discountPercentage > 0 && (
              <Text delete style={{ fontSize: 14, color: "#8c8c8c" }}>
                ${product.price}
              </Text>
            )}
          </Space>
          <Space size="small" style={{ alignItems: "center" }}>
            <Rate
              disabled
              allowHalf
              defaultValue={product.rating}
              style={{ fontSize: 16 }}
            />
            <Tag
              color={
                product.availabilityStatus === "In Stock" ? "green" : "red"
              }
              icon={<CheckCircleOutlined />}
            >
              {product.stock} in stock
            </Tag>
          </Space>
        </Space>
      </Skeleton>
    </Card>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "0 50px", marginTop: 24 }}>
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            style={{ marginBottom: 24 }}
          />
        )}

        <Row gutter={[24, 24]}>
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={8}>
                  <Skeleton active />
                </Col>
              ))
            : products.map((product) => (
                <Col key={product._id} xs={24} sm={12} md={12} lg={8}>
                  {renderProductDetails(product)}
                </Col>
              ))}
        </Row>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Pagination
            current={page}
            total={totalPages}
            pageSize={10}
            onChange={handlePageChange}
            showSizeChanger={false}
            disabled={loading}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Products;
