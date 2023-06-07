import "./create.css";

import axios from "axios";
import { useState } from "react";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    pname: "",
    pprice: 0,
    qty: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/create`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <h2>Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="pname">Name:</label>
            <input
              type="text"
              id="pname"
              name="pname"
              value={product.pname}
              required
              onChange={(e) =>
                setProduct({ ...product, pname: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              required
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="qty">Quantity:</label>
            <input
              type="number"
              id="qty"
              name="qty"
              value={product.qty}
              required
              onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
