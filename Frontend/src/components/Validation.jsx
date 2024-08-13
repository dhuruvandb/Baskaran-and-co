
export const Validation = ({Password})=>{
    return <div className="password-sidebar">
    <ul className="password-rules">
      <li
        className="password-rule"
        style={{
          color: Password?.length >= 8 ? "green" : "red",
        }}
      >
        <span className="rule-icon">
          {Password?.length >= 8 ? "✔" : "X"}
        </span>
        Password must contain at least 8 characters
      </li>
      <li
        className="password-rule"
        style={{
          color:
            Password?.length <= 16 &&
            Password?.length > 0
              ? "green"
              : "red",
        }}
      >
        <span className="rule-icon">
          {Password?.length <= 16 &&
          Password?.length > 0
            ? "✔"
            : "X"}
        </span>
        Password length must not exceed 16 characters
      </li>
      <li
        className="password-rule"
        style={{
          color: /^(?=.*[A-Z])/.test(Password)
            ? "green"
            : "red",
        }}
      >
        <span className="rule-icon">
          {/^(?=.*[A-Z])/.test(Password) ? "✔" : "X"}
        </span>
        Password must contain at least one uppercase letter
      </li>
      <li
        className="password-rule"
        style={{
          color: /^(?=.*[a-z])/.test(Password)
            ? "green"
            : "red",
        }}
      >
        <span className="rule-icon">
          {/^(?=.*[a-z])/.test(Password) ? "✔" : "X"}
        </span>
        Password must contain at least one lowercase letter
      </li>
      <li
        className="password-rule"
        style={{
          color: /^(?=.*[0-9])/.test(Password)
            ? "green"
            : "red",
        }}
      >
        <span className="rule-icon">
          {/^(?=.*[0-9])/.test(Password) ? "✔" : "X"}
        </span>
        Password must contain at least one digit
      </li>
      <li
        className="password-rule"
        style={{
          color: /[-!$%^&*()_+|~=`{}\\[\]:\\/;<>?,.@#]/.test(
            Password
          )
            ? "green"
            : "red",
        }}
      >
        <span className="rule-icon">
          {/[-!$%^&*()_+|~=`{}\\[\]:\\/;<>?,.@#]/.test(
            Password
          )
            ? "✔"
            : "X"}
        </span>
        Password must contain at least one special character
      </li>
    </ul>
  </div>
}