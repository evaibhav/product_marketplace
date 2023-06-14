import "./cart.css";

import {
  deleteCartProducts,
  deleteMultipleCartProducts,
  getCartProduct,
} from "../../store/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [quantities, setQuantities] = useState({});
  const handleAdd = (pid) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pid]: (prevQuantities[pid] || 1) + 1,
    }));
  };

  const handleSubtract = (pid) => {
    setQuantities((prevQuantities) => {
      const updatedQuantity = (prevQuantities[pid] || 1) - 1;
      return {
        ...prevQuantities,
        [pid]: updatedQuantity >= 0 ? updatedQuantity : 1,
      };
    });
  };
  useEffect(() => {
    dispatch(getCartProduct());
  }, []);

  // Calculate the total price based on quantities and product prices
  const totalPrice = cartProducts?.reduce((total, item) => {
    const quantity = quantities[item.id] || 1;
    return total + item.price * quantity;
  }, 0);

  const handleCheckout = () => {
    const totalpids = cartProducts.map((item) => String(item.id));
    const data = {
      pids: totalpids,
    };
    dispatch(deleteMultipleCartProducts(data));
    navigate("/congratulate");
  };
  const handleDlt = (id) => {
    dispatch(deleteCartProducts(id));
  };
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
                    You Pay: $<strong>{item.price}</strong>
                  </li>
                  <li>
                    Variant: <strong>{item.qty}</strong> unit
                  </li>
                </ul>
                <div className="op-quantity">
                  <button onClick={() => handleAdd(item.id)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                  <input
                    type="text"
                    value={quantities[item.id] || 1}
                    readOnly
                  />
                  <button onClick={() => handleSubtract(item.id)}>
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <button
                    className="dlt-product"
                    onClick={() => handleDlt(item.id)}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))}
          <div class="flex-cart">
            <div className="cart-total-price">
              <p>
                <strong> TOTAL PRICE: ${totalPrice} </strong>
              </p>
            </div>
            <div className="checkoutbtn">
              <button onClick={handleCheckout}>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
