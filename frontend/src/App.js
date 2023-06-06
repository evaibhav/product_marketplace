import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/auth/register/register";
import Login from "./component/auth/login/login";
import Home from "./component/home/home";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Cart from "./component/cart/cart";

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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
