import "./login.css";
const Login = () => {
  return (
    <>
      <div class="container">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
