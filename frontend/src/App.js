import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./component/cart/cart";
import Congratulate from "./component/congratulate/congratulate";
import CreateProduct from "./component/product/create/create";
import Footer from "./component/footer/footer";
import GetProduct from "./component/product/get/get";
import Home from "./component/home/home";
import Login from "./component/auth/login/login";
import Navbar from "./component/navbar/navbar";
import ProductDetail from "./component/product/productpage/productpage";
import ProductProfile from "./component/product/productprofile/productprofile";
import Register from "./component/auth/register/register";
import UpdateProduct from "./component/product/update/update";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/register" element = {<Register/>}/>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/cart" element = {<Cart/>}/>
        <Route exact path="/product-profile" element = {<ProductProfile/>}/>
        <Route exact path="/create-product" element = {<CreateProduct/>}/>
        <Route exact path="/update-product/:id" element = {<UpdateProduct/>}/>
        <Route exact path="/view-product" element = {<GetProduct/>}/>
        <Route exact path="/product-detail/:id" element = {<ProductDetail/>}/>
        <Route exact path="/congratulate" element = {<Congratulate/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
