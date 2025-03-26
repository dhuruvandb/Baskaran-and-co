import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Typography, Row, Col, Image, Skeleton, Pagination } from "antd";

const { Title } = Typography;

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { page = 1 } = useParams();
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    // Fetch products for the specific category
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:5000/products/category?page=${page}&limit=10`
      );
      const data = await response.json();
      setProducts(data.category);
      setTotalPages(data.totalcategory);
    };

    fetchProducts();
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {products.map((products) => {
          let product = products.product;

          return (
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
                    style={{ width: "280px", height: 300 }}
                  />
                }
              />
            </Col>
          );
        })}
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
          current={page}
          total={totalPages}
          pageSize={10}
          onChange={(newPage) => {
            window.location.href = `/category/${newPage}`;
            window.scrollTo(0, 0);
          }}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
