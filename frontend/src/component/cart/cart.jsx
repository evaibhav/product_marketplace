import "./cart.css";

const Cart = () => {
  return (
    <>
      <section>
        <div className="display-img">
          <img src={require("../img/plantimg.png")} alt="display-img" />
        </div>
        <div className="cart-page">
          <div className="category-name">CART</div>
          <div className="list-style">
            <img src={require("../img/plantimg.png")} alt="" />
            <ul>
              <li>Hajmola</li>
              <li>You Pay: 100.50</li>
              <li>Variant: 10</li>
            </ul>
            <div className="op-quantity">
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
              <input type="text" />
              <button>
                <i class="fa-solid fa-minus"></i>
              </button>
              <button className="dlt-product">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="list-style">
            <img src={require("../img/plantimg.png")} alt="" />
            <ul>
              <li>Hajmola</li>
              <li>You Pay: 100.50</li>
              <li>Variant: 10</li>
            </ul>
            <div className="op-quantity">
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
              <input type="text" />
              <button>
                <i class="fa-solid fa-minus"></i>
              </button>
              <button className="dlt-product">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="list-style">
            <img src={require("../img/plantimg.png")} alt="" />
            <ul>
              <li>Hajmola</li>
              <li>You Pay: 100.50</li>
              <li>Variant: 10</li>
            </ul>
            <div className="op-quantity">
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
              <input type="text" />
              <button>
                <i class="fa-solid fa-minus"></i>
              </button>
              <button className="dlt-product">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div class="flex-cart">
            <div className="cart-total-price">
              <p>TOTAL PRICE: 550$</p>
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
