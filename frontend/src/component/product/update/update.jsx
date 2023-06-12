import "./update";

import { editProduct } from "../../../store/actions/productAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UpdateProduct = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
console.log(item, 'updatecompitem')
  const [updateProduct, setUpdateProduct] = useState({
    pname: "",
    price: null,
    qty: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(id, updateProduct));
    navigate("/view-product");
  };

  return (
    <>
      <div className="container">
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="pname">Name:</label>
            <input
              type="text"
              id="pname"
              name="pname"
              value={updateProduct.pname}
              placeholder="harsh"
              required
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, pname: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={updateProduct.price}
              required
              placeholder="20"
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, price: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="qty">Quantity:</label>
            <input
              type="number"
              id="qty"
              name="qty"
              value={updateProduct.qty}
              required
              onChange={(e) =>
                setUpdateProduct({ ...updateProduct, qty: e.target.value })
              }
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
