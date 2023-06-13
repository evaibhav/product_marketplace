import jwtDecode from "jwt-decode";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
let initialState = {
  token: null,
  user: null,
  role: null,
  email: null,
  id: null,
};

if (token && user) {
  const decodedUser = jwtDecode(token);
  initialState = {
    token,
    user: user,
    role: decodedUser.role,
    email: decodedUser.email,
    id: decodedUser.id,
  };
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      // Handle the SIGN_UP action
      break;

    case "USER_LOADED":
    case "SIGN_IN":
      localStorage.setItem("token", action.token);
      const user = jwtDecode(action.token);
      localStorage.setItem("user", user);
      return {
        ...state,
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
