import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SendAndVerifyOtp.css";
import { Link, useNavigate } from "react-router-dom";
import { Timer } from "./Timer";
import OTPInput from "./Layouts/OTPInput";
import { axiosWithToastify } from "../helper/fetchUrl";
export const SendAndVerifyOtp = () => {
  const form = useForm();
  const { register, formState } = form;
  const { errors } = formState;
  const [email, setEmail] = useState("");
  const [isOtpSent, setOtpSent] = useState(false);
  let buttonContent = "Send OTP";
  const navigate = useNavigate();
  const handleSendOTP = async () => {
    const path = axiosWithToastify("POST", "/send-otp", {
      email,
      message: "Login with OTP",
    }).then((res) => {
      console.log(res);
    });
    console.log(path);
    setOtpSent(path);
  };
  if (isOtpSent) {
    buttonContent = "Resend OTP";
  }
  return (
    <>
      <div className="container">
        <ToastContainer
          style={{
            width: "fit-content",
            borderRadius: "10%",
          }}
          limit={1}
        />
        <form action="/login-with-otp" className="otp-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please provide a valid Email Address",
                },
                onChange: (e) => setEmail(e.target.value),
              })}
              required
            />
          </div>
          <div className="form-group">
            <button
              onClick={handleSendOTP}
              className="resend-otp-btn"
              type="button"
              onMouseOver={() => {
                if (buttonContent === "Resend OTP") {
                  document.querySelector(".resend-otp-btn").style.cursor =
                    "not-allowed";
                }
              }}
              onMouseOut={() => {
                if (buttonContent === "Send OTP") {
                  document.querySelector(".resend-otp-btn").style.cursor =
                    "default";
                }
              }}
            >
              {buttonContent}
            </button>
            {buttonContent === "Resend OTP" && <Timer />}
          </div>

          {isOtpSent ? <OTPInput /> : ""}
        </form>

        <Link to={"/login"} className="otp-login-link">
          Login with password
        </Link>
      </div>
    </>
  );
};
