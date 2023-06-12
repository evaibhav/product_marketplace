import "./home.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/cartAction";
import { getProduct } from "../../store/actions/productAction";

const Home = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const products = useSelector((state) => state.products.products);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getProduct(null, query));
  };

  const handleAddToCart = (pid) => {
    dispatch(addToCart(pid));
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <div className="home">
        <div className="main-category">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <strong>Search</strong>
            </button>
          </form>
        </div>
        <div className="grid">
          {products.map((item) => (
            <div className="grid-box">
              <img src={require("../img/plantimg.png")} alt="display-img" />
              <Link
                to={`/product-detail/${item.id}`}
                title="CLick to get details"
                className="link-tag"
              >
                <p className="producthomepagedetails">{item.pname}</p>
                <p className="producthomepagedetails">Qty: {item.qty}</p>
                <p className="producthomepagedetails">Price: ${item.price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(item.id);
                }}
              >
                add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
