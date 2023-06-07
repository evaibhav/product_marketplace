import "./home.css";

import { useEffect, useState } from "react";

import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/get-products`);
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <div className="home">
        <div className="main-category">HOME</div>
        <div className="grid">
          {data.map((item) => (
            <div className="grid-box">
              <img src={require("../img/plantimg.png")} alt="display-img" />
              <p className="producthomepagedetails">{item.pname}</p>
              <p className="producthomepagedetails">Qty: {item.qty}</p>
              <p className="producthomepagedetails">Price: {item.price}$</p>
              <button>add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
