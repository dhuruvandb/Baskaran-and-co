import { useEffect, useRef, useState } from "react";
import "../styles/LoginSignup.css"; // Import CSS file for styling
import {
  Form,
  Link,
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { TermsAndConditions } from "../components/TermsAndConditions";
import { Validation } from "../components/Validation";
import { axiosWithToastify } from "../helper/fetchUrl";

export const LoginSignupPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const pathname = location.pathname.replace("/", "");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const dialog = useRef(null);
  const navigate = useNavigate();
  const handleError = () => {
    setShowError(false);
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    const { path, statusCode, token } = await axiosWithToastify(
      "POST",
      "/" + pathname,
      {
        email,
        password,
        message: "Signup Verification",
      },
      {
        withCredentials: true,
      }
    );
    localStorage.setItem("token", token);
    console.log(path, statusCode, token);

    navigate(path);
  };

  const watchPassword = watch("password");
  const watchConfirmPassword = watch("confirmPassword");
  const watchEmail = watch("email");
  return (
    <>
      <div className="login-container">
        <div className="form-container">
          <div className="toggle-buttons">
            <NavLink
              to={"/login"}
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "#007bff" } : {};
              }}
              onClick={handleError}
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              style={({ isActive }) => {
                return isActive ? { backgroundColor: "#007bff" } : {};
              }}
              onClick={handleError}
            >
              Sign Up
            </NavLink>
          </div>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="login-form"
            noValidate
          >
            <h2>{pathname === "login" ? "Login" : "Sign Up"}</h2>
            <div className="input-group">
              <label htmlFor="login-username">Email:</label>
              <input
                type="email"
                id="login-username"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z]+)*$/,
                    message: "Please provide a valid Email Address",
                  },
                  validate: {
                    emptyEmail: (Value) =>
                      Value !== "" || "Please Enter a Email Address",
                  },
                })}
                required
              />
              {showError && (
                <span style={{ color: "red" }}>{errors.email?.message}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="login-password">Password:</label>
              <input
                type="password"
                id="login-password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please Enter Password",
                  },
                  validate: {
                    emptyPassword: (Value) =>
                      Value !== "" || "Please Enter Password",
                  },
                })}
                required
              />
              {showError && (
                <span style={{ color: "red" }}>{errors.password?.message}</span>
              )}
              <br />
              {watchPassword && pathname === "signup" && (
                <>
                  <Validation Password={watch("password")} />
                </>
              )}
              {pathname === "signup" && (
                <>
                  <br />
                  <label htmlFor="login-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="login-password"
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "Please Enter Confirm Password",
                      },
                      validate: {
                        comparePassword: (Value) =>
                          Value !== watchPassword ||
                          "Password and Confirm password not matching",
                      },
                    })}
                    required
                  />
                  {showError && (
                    <span style={{ color: "red" }}>
                      {errors.confirmPassword?.message}
                    </span>
                  )}
                  <br />
                </>
              )}
              {!forgetPassword ? (
                <Link
                  to="/forget-password"
                  onClick={() => {
                    setForgetPassword(true);
                  }}
                  className="forgot-password-link"
                >
                  Forget Password?
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => {
                    setForgetPassword(false);
                  }}
                >
                  ⬅️Back to login
                </Link>
              )}
            </div>
            {pathname === "signup" && (
              <div className="input-group">
                <div style={{ display: "inline-flex" }}>
                  <input
                    type="checkbox"
                    {...register("checkbox", {
                      required: {
                        value: true,
                        message: "Please Agree to terms and Conditions",
                      },
                    })}
                    onChange={(e) => {
                      e.target.checked
                        ? setIsChecked(true)
                        : setIsChecked(false);
                      if (e.target.checked) {
                        dialog.current.showModal();
                        setIsSubmitDisabled(false);
                      } else {
                        setIsSubmitDisabled(true);
                      }
                    }}
                    checked={isChecked}
                    className="terms-checkbox"
                  />
                  <label htmlFor="terms-checkbox" className="terms-text">
                    I agree to the Terms and Conditions
                  </label>
                </div>

                <br />
                <br />
                {showError && (
                  <span style={{ color: "red" }}>
                    {errors.checkbox?.message}
                  </span>
                )}
              </div>
            )}
            <dialog ref={dialog}>
              <TermsAndConditions
                Agree={(e) => {
                  e.preventDefault();
                  dialog.current.close();
                }}
                Decline={(e) => {
                  e.preventDefault();
                  setIsChecked(false);
                  dialog.current.close();
                }}
              />
            </dialog>
            <button
              type="submit"
              onClick={() => {
                console.log("submit clicked");
                setShowError(true);
              }}
              className="submit-button"
            >
              {pathname === "login" ? "Login" : "Sign Up"}
            </button>

            <p>
              <Link to="/login-with-otp" className="otp-link">
                Login with OTP
              </Link>
            </p>
          </Form>
        </div>

        <ToastContainer
          style={{
            width: "fit-content",
            borderRadius: "10%",
          }}
          limit={1}
        />
      </div>
    </>
  );
};
