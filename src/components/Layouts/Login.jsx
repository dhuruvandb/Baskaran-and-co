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
            <label htmlFor="username">Enter Mobile number to continue</label>
            <br />
            <input type="number" placeholder="Enter mobile number" required />
            <br />

            <button type="submit">Login</button>
            <br />
          </fieldset>
        </form>
        <button onClick={hideLogin}>Close</button>
      </dialog>
    </>
  );
}
