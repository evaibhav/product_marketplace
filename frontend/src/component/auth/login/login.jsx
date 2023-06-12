import "./login.css";

import { loadUser, signIn } from "../../../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(loginData));
    // dispatch(loadUser());
    setLoginData({
      email: "",
      password: "",
    });
    navigate("/");
  };

  if (auth.id) return navigate("/");

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
      </div>
    </>
  );
};

export default Login;
