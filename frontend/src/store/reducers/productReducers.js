const productReducers = (state = { products: [], detail: null, productById:[] }, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.products.data,
      };

    case "CREATE_PRODUCT":
      return state; // No changes to the state for this action

    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.product.data.id ? action.product.data : product
        ),
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };

    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        detail: action.product, // Store the product detail data in the state
      };

      case "GET_PRODUCT_BY_ID":
        return {
          ...state,
          productById: action.product, // Store the product detail data in the state
        };

    default:
      return state;
  }
};

export default productReducers;
