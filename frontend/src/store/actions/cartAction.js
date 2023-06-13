import { setHeaders, url } from "../../api/index";

import axios from "axios";

export const addToCart = (pid) => {
  return (dispatch) => {
    axios
      .post(`${url}/addToCart/${pid}`,null, setHeaders())
      .then((res) => {
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
      const cartData = resp.data;
      dispatch({
        type: "GET_CART_DATA",
        cartData,
      });
    });
  };
};
  
export const deleteCartProducts = (id)=>{
  return (dispatch) => {
    axios.delete(`${url}/deleteCartProducts/${id}`, setHeaders()).then(() => {
      dispatch({
        type: "DELETE_CART_PRODUCT",
        id,
      });
    });
  };
}