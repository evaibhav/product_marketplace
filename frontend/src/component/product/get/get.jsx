import "./get.css";

import {
  deleteProduct,
  getProductById,
} from "../../../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import UpdateProduct from "../update/update";
import { useNavigate } from "react-router-dom";

const GetProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const product = useSelector((state) => state.products.detail);

  const handleEdit = (id, item) => {
    setData(item);
    navigate(`/update-product/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  // const updateProductProps = { data };

  useEffect(() => {
    dispatch(getProductById());
  }, []);

  return (
    <>
      <div className="home">
        <div className="main-category">PRODUCTS</div>
        <div className="grid">
          {product ? (
            <>
              {product.map((item) => (
                <div className="grid-product-box">
                  <img
                    src={require("../../img/plantimg.png")}
                    alt="display-img"
                  />
                  <p className="producthomepagedetails">{item.pname}</p>
                  <p className="producthomepagedetails">Qty: {item.qty}</p>
                  <p className="producthomepagedetails">Price: {item.price}$</p>
                  <button onClick={() => handleDelete(item.id)}>delete</button>
                  <button onClick={() => handleEdit(item.id, item)}>
                    Edit
                  </button>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* <UpdateProduct {...updateProductProps} /> */}
    </>
  );
};

export default GetProduct;
