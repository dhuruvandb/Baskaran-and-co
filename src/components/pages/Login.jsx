import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

export default function Login() {
  const isUserLoggedIn = useSelector((state) => state.loggedInfo.isLoggedin);
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <form action="/">
        <fieldset>
          <legend>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return isActive
                  ? { color: "purle" }
                  : { textDecoration: "none" };
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              style={({ isActive }) => {
                return isActive
                  ? { color: "purle" }
                  : { textDecoration: "none" };
              }}
            >
              Signup
            </NavLink>
          </legend>
          <label htmlFor="username">Enter Mobile number to continue</label>
          <br />
          <input type="email" placeholder="Enter Email" required />
          <br />
          <input type="number" placeholder="Enter mobile number" required />
          <br />

          <button type="submit">Login with OTP</button>
          <br />
        </fieldset>
      </form>
    </>
  );
}
