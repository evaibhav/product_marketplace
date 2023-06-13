const cartReducers = (cartProducts = [], action) => {
  switch (action.type) {
    case "GET_CART_DATA":
      return{
        ...cartProducts,
       cartProducts: action.cartData
      }
    case "ADD_TO_CART":
      break;
      case "DELETE_CART_PRODUCT":
        return {
          ...cartProducts,
          cartProducts: cartProducts.filter((product) => product.id !== action.id),
        };
    default:
      return cartProducts;
  }
};

export default cartReducers;
