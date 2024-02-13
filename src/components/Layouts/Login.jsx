import { useContext } from "react";
import { context } from "../../ContextProvider";
export default function Login() {
  const { ShowLogIn, hideLogin } = useContext(context);
  return (
    <>
      <dialog ref={ShowLogIn}>
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
        <button onClick={hideLogin}>Close</button>
      </dialog>
    </>
  );
}
