import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../../api";

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/register`, user)
      .then((user) => {
        dispatch({
          type: "SIGN_UP",
          user,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.response(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const signIn = (creds) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, creds)
      .then((resp) => {
        console.log(resp,'action resp')
        localStorage.setItem("token", resp.data.token);

        dispatch({
          type: "SIGN_IN",
          token: resp.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
