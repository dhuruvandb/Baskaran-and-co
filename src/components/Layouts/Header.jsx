import { useContext } from "react";
import { context } from "../../ContextProvider";
import Login from "./Login";
import Cart from "./Cart";
export default function Header() {
  const { isShowLogIn, showLogin } = useContext(context);
  return (
    <>
      <header className="header">
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg"
          alt="logo"
          className="logo"
          height={75}
          width={75}
        />
        <input
          type="text"
          placeholder="Search your favorite product here"
          className="search"
        />
        <button className="search-button">🔍</button>
        <button className="cart">🛒</button>
        <button className="login" title="Login" onClick={showLogin}>
          Login/Sign up
        </button>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">category 1</a>
        <a href="#">category 2</a>
        <a href="#">category 3</a>
      </nav>
      {isShowLogIn && <Login />}
      <Cart />
    </>
  );
}
