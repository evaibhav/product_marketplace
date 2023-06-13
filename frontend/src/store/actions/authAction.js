import axios from "axios";
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
      });
  };
};

export const signIn = (creds) => {
  return (dispatch) => {
    axios
      .post(`${url}/login`, creds)
      .then((resp) => {
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
    // const user = getState().auth.user;

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
