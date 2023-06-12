const cartReducers = (cartProduct = [], action) => {
  switch (action.type) {
    case "GET_CART_DATA":
      return action.cartProduct.data;
    case "ADD_TO_CART":
      break;
    default:
      return cartProduct;
  }
};

export default cartReducers;
