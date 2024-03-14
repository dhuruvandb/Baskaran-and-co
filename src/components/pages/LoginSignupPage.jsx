import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "../../styles/login.css";
export default function LoginSignupPage() {
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
          <input
            type="email"
            placeholder="Enter your Email"
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
          />
          <input
            type="number"
            placeholder="+91-Enter your phone number"
            required
            pattern="[0-9]{10}"
            title="Please enter a 10-digit mobile number"
            maxlength="10"
          />
          <br />

          <button type="submit">Login with OTP</button>
          <br />
        </fieldset>
      </form>
    </>
  );
}
