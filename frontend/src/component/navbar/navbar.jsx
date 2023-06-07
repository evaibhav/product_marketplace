import "./navbar.css";
import "./mediaquery.css";

import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="navbar-logo">
            Ecommerce Marketplace
          </a>
        </div>
        <div className="navbar-center">
          <form>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <strong>Search</strong>
            </button>
          </form>
        </div>
        <ul className="navbar-right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button className="signupbtn" onClick={() => setShow(true)}>
              <a href="/register">Register/Login</a>
            </button>
          </li>
          <li>
            <a href="/cart">
              Cart
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li>
            <a href="/product-profile">Product Profile</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
