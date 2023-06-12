import "./register.css";

import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../../store/actions/authAction";
import { useState } from "react";

const Register = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: 0,
    dob: "",
    locality: "",
    role: "",
    city: "",
    pincode: 0,
    state: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
      phone: 0,
      dob: "",
      locality: "",
      role: "",
      city: "",
      pincode: 0,
      state: "",
      country: "",
    });
  };

  return (
    <>
      <div className="head-container">
        <div class="container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                required
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={user.phone}
                required
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="dob">Dob:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={user.dob}
                required
                onChange={(e) => setUser({ ...user, dob: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="locality">Locality:</label>
              <input
                type="text"
                id="Locality"
                name="locality"
                value={user.locality}
                required
                onChange={(e) => setUser({ ...user, locality: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">
                Role:
                <select
                  id="role"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="vendor">Vendor</option>
                  <option value="customer">Customer</option>
                </select>
              </label>
            </div>
            <div class="form-group">
              <label for="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={user.city}
                required
                onChange={(e) => setUser({ ...user, city: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="pincode">Pincode:</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={user.pincode}
                required
                onChange={(e) => setUser({ ...user, pincode: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="state">State:</label>
              <input
                type="text"
                id="State"
                name="state"
                value={user.state}
                required
                onChange={(e) => setUser({ ...user, state: e.target.value })}
              />
            </div>
            <div class="form-group">
              <label for="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={user.country}
                required
                onChange={(e) => setUser({ ...user, country: e.target.value })}
              />
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
        <div className="login-container margin">
          <p className="existing-account-description">
            If already have an account then directly click on login!!
          </p>
          <button type="submit" className="login-btn">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
