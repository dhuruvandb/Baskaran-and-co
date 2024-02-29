export default function Login() {
  return (
    <>
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
    </>
  );
}
