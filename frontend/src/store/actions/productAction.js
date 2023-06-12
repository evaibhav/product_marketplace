import { setHeaders, url } from "../../api";

import axios from "axios";
import { toast } from "react-toastify";

export const createProduct = (product) => {
  return (dispatch) => {
    axios
      .post(`${url}/create`, product, setHeaders())
      .then((product) => {
        dispatch({
          type: "CREATE_PRODUCT",
          product,
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

export const editProduct = (id, updatedProduct) => {
  return (dispatch) => {
    axios.put(`${url}/update/${id}`, updatedProduct).then((product) => {
      dispatch({
        type: "EDIT_PRODUCT",
        product,
      });
    });
  };
};

export const getProduct = (id, keyword) => {
  return (dispatch) => {
    if (id) {
      axios
        .get(`${url}/getProducts?userId=${id}`)
        .then((products) => {
          dispatch({
            type: "GET_PRODUCTS",
            products,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else if (keyword) {
      axios
        .get(`${url}/getProducts?keyword=${keyword}`)
        .then((products) => {
          dispatch({
            type: "GET_PRODUCTS",
            products,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      axios
        .get(`${url}/getProducts`)
        .then((products) => {
          dispatch({
            type: "GET_PRODUCTS",
            products,
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios.delete(`${url}/delete/${id}`).then(() => {
      dispatch({
        type: "DELETE_PRODUCT",
        id,
      });
    });
  };
};

export const getProductDetail = (id) => {
  return (dispatch) => {
    axios.get(`${url}/getProductDetails/${id}`).then((product) => {
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        product,
      });
    });
  };
};

export const getProductById = () => {
  return (dispatch) => {
    axios.get(`${url}/getProductById`, setHeaders())
    .then((resp) => {
      const product = resp.data;
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        product,
      });
    });
  };
};
