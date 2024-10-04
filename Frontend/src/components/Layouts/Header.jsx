import "../../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { cartItems } from "../store/Selectors/cart-selectors";
import { useEffect } from "react";
import { getCart } from "../store/Thunks/cart-thunk";
import { Button } from "@mui/material";

export default function Header() {
  const cartValue = useSelector(cartItems) || 0;
  const totalItems = cartValue.reduce((pre, next) => {
    return pre + next.cartValue;
  }, 0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart("66ae15a9ac912312f503f23599e"));
  }, [dispatch]);
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
        />
        <button className="search-button">🔍</button>
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
