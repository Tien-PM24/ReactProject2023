import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Lazada = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/lazada")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleBuyNow = (product) => {
    // Xử lý logic khi nhấn nút "Add Cart"
    console.log("Add to cart:", product);
  };

  return (
    <div>
      <h1>Lazada for Tien API make</h1>
      <div className="laptop-list">
        {products.map((product) => (
          <div key={product.id} className="laptop" class="group-laptop">
            <Link to={`/detail/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <p>{product.name}</p>
            <p>Price: {product.price}</p>
            <p>Shop Owner: {product.shop_owner}</p>
            <div className="laptop-action">
              <button
                type="submit"
                className="buy-laptop"
                onClick={() => handleBuyNow(product)}
              >
                Add Cart
              </button>
              <button type="button" className="detail-laptop">
                <Link
                  to={`/detail/${product.id}`}
                  style={{ textDecoration: "none", color: "orange" }}
                >
                  Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lazada;
