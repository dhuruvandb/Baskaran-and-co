import { useState } from "react";
import "../../styles/header.css";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const cartVal = useSelector((state) => state.cartVal.cartValue);

  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg"
            alt="logo"
            className="logo"
            height={75}
            width={75}
          />
        </Link>
        <input
          type="text"
          placeholder="Search your favorite product here"
          className="search"
        />
        <button className="search-button">🔍</button>
        <Link to="/cart">
          <button className="cart">
            🛒
            <sup>{Object.keys(cartVal).length}</sup>
          </button>
        </Link>

        <div
          className="login"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <div>Login/Sign up</div>

          {dropdown && (
            <span className="dropdown">
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
            </span>
          )}
        </div>
      </header>
    </>
  );
}
