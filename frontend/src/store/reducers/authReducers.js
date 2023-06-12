import "react-toastify/dist/ReactToastify.css";

import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("token"),
  role: null,
  email: null,
  id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      toast("User Registered succesfully...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case "USER_LOADED":
    case "SIGN_IN":
      toast("User Logged in succesfully...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(action, 'reducer action')
      localStorage.setItem("token", action.token);
      const user = jwtDecode(action.token);
      console.log(user,'action user')
      return {
        ...initialState,
        token: action.token,
        role: user.role,
        email: user.email,
        id: user.id,
      };

    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("User logged out...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
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
