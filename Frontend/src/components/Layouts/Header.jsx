import { useState } from "react";
import "../../styles/header.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const cartVal = useSelector((state) => state.cartVal.cartValue);
  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg"
          alt="logo"
          className="logo"
        />
      </Link>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search your favorite product here"
          className="search"
        />
        <button className="search-button">🔍</button>
      </div>
      <Link to="/cart" className="cart-link">
        <button className="cart">
          🛒
          <sup>{Object.keys(cartVal).length}</sup>
        </button>
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
