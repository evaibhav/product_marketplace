import "./login.css";

import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8080/login`, loginData)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              required
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />{" "}
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              required
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />{" "}
          </div>
          <input type="submit" value="Login" />
        </form>
        <p>{message.message}</p>
      </div>
    </>
  );
};

export default Login;
