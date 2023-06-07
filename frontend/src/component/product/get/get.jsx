import "./get.css";

import { useEffect, useState } from "react";

import axios from "axios";

const GetProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/get-product/2`);
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:8080/delete/2`);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="home">
        <div className="main-category">PRODUCTS</div>
        <div className="grid">
          {data.map((item) => (
            <div className="grid-box">
              <img src={require("../../img/plantimg.png")} alt="display-img" />
              <p className="producthomepagedetails">{item.pname}</p>
              <p className="producthomepagedetails">Qty: {item.qty}</p>
              <p className="producthomepagedetails">Price: {item.price}$</p>
              <button onClick={handleDelete}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetProduct;
