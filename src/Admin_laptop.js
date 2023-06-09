import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProducts";

function Admin() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Thêm selectedProduct vào state

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://63a571e42a73744b008e23ee.mockapi.io/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await axios.get(
        `https://63a571e42a73744b008e23ee.mockapi.io/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = async (productId) => {
    const product = await getProductById(productId);
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Admin Manager Laptop Website</h1>
      <button className="submit"><Link to="/AddProduct" style={{ textDecoration: "none", color: "white" }}>Add Product</Link></button>
      <table className="form">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th className="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.laptop_name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.laptop_name}
                  width="100"
                  height="100"
                />
              </td>
              <td>
                <button className="submit2"><Link to={`/EditProduct/${product.id}`} style={{ textDecoration: "none", color: "blue" }} onClick={() => handleEditProduct(product.id)}>Edit</Link></button>
                <DeleteProduct product={product} fetchProducts={fetchProducts} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
