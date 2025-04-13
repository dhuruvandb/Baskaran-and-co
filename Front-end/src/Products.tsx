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
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";

const { Content } = Layout;
const { Title, Text } = Typography;

// Interface for product type
interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  availabilityStatus: string;
}

// Interface for API response
interface ProductResponse {
  products: Product[];
  totalPages: number;
}

// Route parameters
interface Params {
  page?: string;
  category?: string;
}

function Products() {
  const { page = "1", category } = useParams<Params>();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const currentPage = parseInt(page, 10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `http://localhost:5000/products?page=${currentPage}&limit=10&category=${
            category ?? ""
          }`
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data: ProductResponse = await response.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, currentPage]);

  const handlePageChange = (newPage: number) => {
    navigate(`/page/${newPage}`);
    window.scrollTo(0, 0);
  };

  const renderProductDetails = (product: Product) => (
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

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
        >
          <Pagination
            current={currentPage}
            total={totalPages * 10} // total = total items, not pages
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
