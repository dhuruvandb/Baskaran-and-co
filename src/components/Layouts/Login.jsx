import { useContext } from "react";
import { context } from "../../ContextProvider";
export default function Login() {
  const { hideLogin } = useContext(context);
  return (
    <>
      <button onClick={hideLogin}>X</button>
      <form action="/">
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" placeholder="Enter your username" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" placeholder="Enter your password" />
          <br />
          <button type="submit">Login</button>
          <br />
          <a href="#">Create account</a>
        </fieldset>
      </form>
    </>
  );
}
