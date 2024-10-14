import "../../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cartItems } from "../store/Selectors/cart-selectors";
import { useEffect, useState } from "react";
import { getCart } from "../store/Thunks/cart-thunk";
import { Button } from "@mui/material";
import { selectSearch } from "../store/Selectors/product-selectors";
import { searchProducts } from "../store/Thunks/products-thunk";

export default function Header() {
  const cartValue = useSelector(cartItems) || [];
  const totalItems = cartValue.reduce((pre, next) => pre + next.cartValue, 0);
  const productNames = useSelector(selectSearch);
  const [searchText, setSearchText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCart("66ae15a9ac912312f503f23599e"));
    document.addEventListener("click", () => {
      setSearchText("");
    });
  }, [dispatch]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (selectedIndex < productNames.length - 1) {
        setSelectedIndex((prevIndex) => prevIndex + 1);
        setSearchText(productNames[selectedIndex + 1].name);
      } else {
        setSelectedIndex(0);
        setSearchText(productNames[0].name);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (selectedIndex === 0) {
        setSelectedIndex(productNames.length - 1);
        setSearchText(productNames[productNames.length - 1].name);
      } else if (selectedIndex > 0) {
        setSelectedIndex((prevIndex) => prevIndex - 1);
        setSearchText(productNames[selectedIndex - 1].name);
      } else {
        setSelectedIndex(-1);
        setSearchText("");
      }
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        setSelectedIndex(-1);
        setSearchText(productNames[selectedIndex].name);
        navigate(
          `/products/${productNames[selectedIndex].category}/${productNames[selectedIndex]._id}`
        );
        setSearchText("");
        window.location.reload();
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchProducts({ search: e.target.value }));
    setSelectedIndex(-1);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg"
          alt="logo"
          className="logo"
          loading="lazy"
        />
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search your favorite product here"
          className="search"
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          value={searchText}
        />
        <button
          className="search-button"
          onClick={() => {
            if (productNames[selectedIndex] !== undefined) {
              navigate(
                `/products/${productNames[selectedIndex].category}/${productNames[selectedIndex]._id}`
              );
              window.location.reload();
            } 
          }}
        >
          🔍
        </button>
        {searchText && (
          <ul className="search-results">
            {searchText.length > 0 && productNames.length > 0 ? (
              productNames.map((data, i) => (
                <li
                  key={data._id}
                  onClick={() => {
                    setSearchText(data.name);
                    setSelectedIndex(-1);
                    navigate(`/products/${data.category}/${data._id}`);
                    window.location.reload();
                  }}
                  style={{
                    backgroundColor:
                      i === selectedIndex ? "#bde4ff" : "transparent",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/products/${data.category}/${data._id}`}
                  >
                    {data.name}
                  </Link>
                </li>
              ))
            ) : (
              <li>No products found! </li>
            )}
          </ul>
        )}
      </div>
      <Link to="/cart" className="cart-link">
        <Button>
          🛒
          <sup>{totalItems}</sup>
        </Button>
      </Link>

      <div className="login-dropdown-container">
        <div className="login">Login/Sign up</div>
        <div className="dropdown">
          <ul>
            <li>
              <NavLink to="/login">Your Profile</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
