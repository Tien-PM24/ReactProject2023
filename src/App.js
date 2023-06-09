import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Admin from "./Admin_laptop";
import ShowLaptops from "./HomePage";
import Detail from "./Detail";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProducts";
import axios from "axios";
import Products from "./ShowdataBanhNgot";
import Checkout from "./card";
import HotelDetail from "./Detail-room";
import Lazada from "./ShowLaravel";

function App() {
  const fetchProductById = async (productId) => {
    try {
      const response = await axios.get(
        `https://63a571e42a73744b008e23ee.mockapi.io/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //return (
  //  <div>
  //    {/*<Header />
  //    <Routes>
  //      <Route path="/Admin" element={<Admin fetchProductById={fetchProductById} />} />
  //      <Route path="/" element={<ShowLaptops />} />
  //      <Route path="/HomePage" element={<ShowLaptops />} />
  //      <Route path="/detail/:id" element={<Detail />} />
  //      <Route path="/AddProduct" element={<AddProduct />} />
  //      <Route path="/EditProduct/:id" element={<EditProduct />} />
  //      <Route path="/checkout" element={<Checkout />} /> 
  //    </Routes>*/}
  //    {/*<HotelDetail />*/}
  //  </div>
  //);

  return (
    //<Products/>
    <Lazada/>
  )
}

export default App;
