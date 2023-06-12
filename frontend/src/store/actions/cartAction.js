import { setHeaders, url } from "../../api";

import axios from "axios";

export const addToCart = (pid) => {
  return (dispatch) => {
    axios
      .post(`${url}/addToCart/${pid}`, setHeaders())
      .then(() => {
        dispatch({
          type: "ADD_TO_CART"
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const getCartProduct = () => {
  return (dispatch) => {
    axios.get(`${url}/cartProducts`, setHeaders())
    .then((resp) => {
      dispatch({
        type: "GET_CART_DATA",
        resp,
      });
    });
  };
};
