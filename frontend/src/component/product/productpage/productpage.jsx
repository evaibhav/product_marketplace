import "./productpage.css";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../store/actions/cartAction";
import { getProductDetail } from "../../../store/actions/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.detail);

  const handleAddToCart = (pid) => {
    dispatch(addToCart(pid));
  };

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="detailHeader">
        <div className="header-name">
          <p>PRODUCT DETAIL</p>
          <div className="productdetail-grid">
            <div className="detail-grid1">
              <img src={require("../../img/plantimg.png")} alt="product-img" />
            </div>
            <div className="detail-grid2">
              <div className="detail-gridstyle">
                {product && product.data && product.data.length ? (
                  <>
                    <p>Title : {product.data[0].pname}</p>
                    <p>Price : {product.data[0].price}</p>
                    <p>Qty : {product.data[0].qty}</p>
                    <button
                      className="pdetail-btn"
                      onClick={() => {
                        handleAddToCart(product.data[0].id);
                      }}
                    >
                      add to cart
                    </button>
                  </>
                ) : (
                  <>
                    <div>No data found</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
