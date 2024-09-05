// src/components/Homepage.js
import React from "react";
import "../styles/Home.css";

export const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 99.99,
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 149.99,
      imageUrl: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: 199.99,
      imageUrl: "https://via.placeholder.com/200",
    },
  ]; // Example featured products

  const categories = [
    { id: 1, name: "Electronics", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Fashion", imageUrl: "https://via.placeholder.com/150" },
    {
      id: 3,
      name: "Home & Garden",
      imageUrl: "https://via.placeholder.com/150",
    },
  ]; // Example categories

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Shop</h1>
          <p>Your one-stop destination for the best products</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.imageUrl} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </section>

      <section className="promotions">
        <h2>Current Promotions</h2>
        <div className="promotion-banner">
          <p>Save up to 50% on selected items!</p>
          <button>View Deals</button>
        </div>
      </section>
    </div>
  );
};
