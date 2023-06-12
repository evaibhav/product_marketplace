import "react-toastify/dist/ReactToastify.css";

import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  user: localStorage.getItem("user"),
  role: null,
  email: null,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      break;
    case "USER_LOADED":
    case "SIGN_IN":
      localStorage.setItem("token", action.token);
      const user = jwtDecode(action.token);
      localStorage.setItem("user", user);
      return {
        ...initialState,
        token: action.token,
        user: user,
        role: user.role,
        email: user.email,
        id: user.id,
      };

    case "SIGN_OUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return {
        token: null,
        role: null,
        email: null,
        id: null,
      };

    default:
      return state;
  }
};
export default authReducer;
