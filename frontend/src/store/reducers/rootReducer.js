import authReducer from "./authReducers";
import cartReducers from "./cartReducers";
import { combineReducers } from "redux";
import productReducers from "./productReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducers,
    cart: cartReducers
});

export default rootReducer;