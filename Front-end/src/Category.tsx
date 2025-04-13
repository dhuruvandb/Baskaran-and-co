import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Typography,
  Row,
  Col,
  Image,
  Skeleton,
  Pagination,
} from "antd";

const { Title } = Typography;

// Define Product types
interface Product {
  _id: string;
  title: string;
  category: string;
  thumbnail: string;
}

interface CategoryProduct {
  product: Product;
}

interface CategoryApiResponse {
  category: CategoryProduct[];
  totalcategory: number;
}

// Route params interface
interface RouteParams {
  page?: string;
}

const CategoryPage: React.FC = () => {
  const [products, setProducts] = useState<CategoryProduct[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { page } = useParams<RouteParams>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products/category?page=${page || 1}&limit=10`
        );
        const data: CategoryApiResponse = await response.json();
        console.log({ data });

        setProducts(data.category);
        setTotalPages(data.totalcategory);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {products.map(({ product }) => (
          <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
            <Title level={2} style={{ textTransform: "capitalize" }}>
              <Link to={`/${product.category}/page/1`}>
                {product.category}
              </Link>
            </Title>
            <Image
              src={product.thumbnail}
              alt={product.title}
              style={{
                objectFit: "contain",
                width: 280,
                height: 300,
              }}
              placeholder={
                <Skeleton.Image
                  active
                  style={{ width: 280, height: 300 }}
                />
              }
            />
          </Col>
        ))}
      </Row>

      <div
        style={{
          textAlign: "center",
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          current={parseInt(page || "1", 10)}
          total={totalPages}
          pageSize={10}
          onChange={(newPage) => {
            navigate(`/category/${newPage}`);
            window.scrollTo(0, 0);
          }}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
