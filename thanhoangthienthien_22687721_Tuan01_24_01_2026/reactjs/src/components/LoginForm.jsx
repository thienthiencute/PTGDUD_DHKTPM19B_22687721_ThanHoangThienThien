import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="title">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />

        <button className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;