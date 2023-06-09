import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function ShowLaptops() {
  const navigate = useNavigate();
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const response = await axios.get("https://63a571e42a73744b008e23ee.mockapi.io/products");
      setLaptops(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyNow = async (laptop) => {
    try {
      const response = await axios.post('https://63a571e42a73744b008e23ee.mockapi.io/card', laptop);
      console.log("Sản phẩm của bạn đã được thêm vào giở hàng:", response.data);
      navigate("/cart");
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Laptop đang hot hiện nay</h2>
      <div className="laptop-list">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="laptop" class="group-laptop">
            <Link to={`/detail/${laptop.id}`} ><img src={laptop.image} alt={laptop.name} /></Link>
            <p>{laptop.laptop_name}</p>
            <p>{laptop.price}</p>
            <p>{laptop.detail}</p>
            <div className="laptop-action">
              <button type="submit" className="buy-laptop" onClick={()=>handleBuyNow(laptop)}>Add Cart</button>
              <button type="button" className="detail-laptop">
                <Link to={`/detail/${laptop.id}`} style={{ textDecoration: "none", color: "orange" }}>Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowLaptops;
