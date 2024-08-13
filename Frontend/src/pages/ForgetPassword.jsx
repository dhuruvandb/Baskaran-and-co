import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { axiosWithToastify } from "../helper/fetchUrl";

export default function ForgetPassword() {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { newPassword, confirmPassword } = data;
    if (newPassword !== confirmPassword) {
      alert("New password and Confirm password doesn't match");
    } else {
      axiosWithToastify("PUT", "/forgot-password", data);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="Current Password"
          {...register("currentPassword", { required: true })}
        />
        <br />
        <input
          type="password"
          placeholder="New Password"
          {...register("newPassword", { required: true })}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: true })}
        />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
