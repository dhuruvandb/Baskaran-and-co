import React, { useState, useRef, useEffect } from "react";
import {
  Layout,
  Menu,
  Input,
  Badge,
  Typography,
  List,
  AutoComplete,
  Drawer,
  Button,
} from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const { Header } = Layout;
const { Title } = Typography;
const { Search } = Input;

const AppHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = async (value) => {
    setSearchQuery(value);

    if (value) {
      const filteredProducts = await axios.get(
        `http://localhost:5000/products/search/${value}`
      );
      setSearchResults(filteredProducts.data.results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSearchSubmit = (value) => {
    setShowResults(false);
    if (value && searchResults.length > 0) {
      navigate(`/products/${value}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (selectedIndex < searchResults.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      if (
        searchResults[selectedIndex]._id !== undefined &&
        searchResults.length > 0
      ) {
        handleSearchSubmit(searchResults[selectedIndex].title);
        navigate(`/products/${searchResults[selectedIndex]._id}`);
      }
    }
  };

  useEffect(() => {
    if (
      selectedIndex !== -1 &&
      searchResults[selectedIndex].title !== undefined
    ) {
      setSearchQuery(searchResults[selectedIndex].title);
    }
  }, [selectedIndex, searchResults]);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Header
      style={{
        backgroundColor: "#001529",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/">
        <Title level={3} style={{ color: "white", margin: 0 }}>
          My E-Commerce
        </Title>
      </Link>

      <Button
        className="mobile-menu-button"
        type="link"
        icon={<MenuOutlined />}
        onClick={toggleDrawer}
        style={{ display: "none" }}
      />

      <Drawer
        title="Navigation"
        placement="right"
        visible={drawerVisible}
        onClose={toggleDrawer}
      >
        <Menu
          mode="vertical"
          theme="dark"
          style={{ width: "100%" }}
          onClick={toggleDrawer}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/category/1">Categories</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "400px",
          margin: "0 20px",
        }}
        ref={searchRef}
      >
        <AutoComplete
          value={searchQuery}
          onChange={handleSearch}
          onSearch={handleSearch}
          onSelect={(value) => handleSearchSubmit(value)}
          placeholder="Search products..."
          style={{ width: "100%" }}
        >
          <Search
            placeholder="Search products..."
            allowClear
            onSearch={handleSearchSubmit}
            onKeyDown={handleKeyDown}
          />
        </AutoComplete>

        {showResults && searchResults.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: 4,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
            }}
          >
            <List
              dataSource={
                searchResults.length > 0
                  ? searchResults
                  : [{ title: "No products found" }]
              }
              renderItem={(product, index) => (
                <List.Item
                  key={product._id}
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedIndex === index ? "#f0f0f0" : "transparent",
                  }}
                  onClick={() => handleSearchSubmit(product.title)}
                >
                  <Link to={`/products/${product._id}`}>{product.title}</Link>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, justifyContent: "center", display: "inline-block" }}
        className="desktop-menu"
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/category/1">Categories</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Badge count={5}>
          <Link to="/cart">
            <ShoppingCartOutlined
              style={{ fontSize: 24, color: "white", cursor: "pointer" }}
            />
          </Link>
        </Badge>
        <Link to="/login">
          <UserOutlined
            style={{ fontSize: 24, color: "white", cursor: "pointer" }}
          />
        </Link>
      </div>
    </Header>
  );
};

export default AppHeader;
