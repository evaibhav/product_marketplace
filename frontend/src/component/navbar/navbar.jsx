import "./navbar.css";
import "./mediaquery.css";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="navbar-logo">
            Ecommerce Marketplace
          </a>
        </div>

        <ul className="navbar-right">
          <li>
            <a href="/">Home</a>
          </li>
          {auth && auth.token ? (
            <>
              <li>
                <button className="signupbtn">
                  <a href="#">{auth.email}</a>
                </button>
              </li>
              <li>
                <button className="signupbtn" onClick={handleLogOut}>
                  <a href="#">Logout</a>
                </button>
              </li>
              {auth && auth.role === "vendor" ? (
                <>
                  <li>
                    <a href="/product-profile">Product Profile</a>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li>
                <a href="/cart">
                  Cart
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <button className="signupbtn">
                  <a href="/register">Register/Login</a>
                </button>
              </li>
              <li>
                <a href="#">
                  Cart
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
