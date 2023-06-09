import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style/detail_laptop.css"

function Detail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    fetchLaptop();
  }, []);

  const fetchLaptop = async () => {
    try {
      const response = await axios.get(`https://63a571e42a73744b008e23ee.mockapi.io/products/${id}`);
      setLaptop(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!laptop) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-product">

        <div className="product-left">
          <img src={laptop.image} alt={laptop.name} className="detail-image" />
        </div>

        <div className="product-right">
          <p className="detail-name"><span>Product name:</span> {laptop.laptop_name}</p>
          <p className="detail-price"><span>Price:</span> {laptop.price}</p>
          <p className="detail-description">{laptop.description}</p>
          <button className="buy-button" >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
