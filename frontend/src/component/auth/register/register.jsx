import { useState } from "react";
import "./register.css";
import axios from "axios";

const Register = () => {


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
  return (
    <>
      <div class="container">
        <h2>Register</h2>
        <form>
          <div class="form-group">
            <label for="username">Name:</label>
            <input type="text" id="username" name="username" value ={name}  required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div class="form-group">
            <label for="dob">Dob:</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div class="form-group">
            <label for="locality">Locality:</label>
            <input type="text" id="Locality" name="Locality" required />
          </div>
          <div class="form-group">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div class="form-group">
            <label for="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode" required />
          </div>
          <div class="form-group">
            <label for="state">State:</label>
            <input type="text" id="State" name="State" required />
          </div>
          <div class="form-group">
            <label for="country">Country:</label>
            <input type="text" id="country" name="country" required />
          </div>
          <input type="submit" value="Register" />
          <input type="submit" value="Login" />

        </form>
      </div>
    </>
  );
};

export default Register;
