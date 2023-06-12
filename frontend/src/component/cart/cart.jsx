import "./cart.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getCartProduct } from "../../store/actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubtract = () => {
    setCount((prevCount) => prevCount - 1);
  };
  useEffect(() => {
    dispatch(getCartProduct());
  }, []);
  return (
    <>
      <section>
        <div className="display-img">
          <img src={require("../img/plantimg.png")} alt="display-img" />
        </div>
        <div className="cart-page">
          <div className="category-name">CART</div>
          {cartProducts &&
            cartProducts.length &&
            cartProducts.map((item) => (
              <div className="list-style">
                <img src={require("../img/plantimg.png")} alt="" />
                <ul>
                  <li>
                    Name: <strong>{item.pname}</strong>
                  </li>
                  <li>
                    You Pay: <strong>{item.price}</strong>
                  </li>
                  <li>
                    Variant: <strong>{item.qty}</strong>
                  </li>
                </ul>
                <div className="op-quantity">
                  <button onClick={handleAdd}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <input type="text" value={count} readOnly />
                  <button onClick={handleSubtract}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button className="dlt-product">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))}
          <div class="flex-cart">
            <div className="cart-total-price">
              <p>TOTAL PRICE: {}</p>
            </div>
            <div className="checkoutbtn">
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
