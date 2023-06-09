import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

function AddProduct({ fetchProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    laptop_name: "",
    price: "",
    description: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addProduct = async () => {
    try {
      const response = await axios.post(
        "https://63a571e42a73744b008e23ee.mockapi.io/products",
        formData
      );
      fetchProducts();
      setFormData({
        laptop_name: "",
        price: "",
        description: "",
        image: "",
      }); setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-product">
      <h2>Add New Product <button className="submit4"><Link to="/Admin" style={{ textDecoration: "none", color: "orange" }}>Back to Admin</Link></button></h2>
      <form>
        <table align="center">
          <tr>
            <td>
              <label>Product Name:</label>
            </td>
            <td>
              <input
                type="text"
                name="laptop_name"
                value={formData.laptop_name}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Price:</label>
            </td>
            <td>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Description:</label>
            </td>
            <td>
              <input
                type="text"
                name="description"
                className="description-input"
                placeholder="Mô tả ..."
                value={formData.description}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Image:</label>
            </td>
            <td>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="submit" style={{ textDecoration: "none", color: "white", width: "36%" }} onClick={addProduct}>
                Add Product
              </button>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Thêm sản phẩm thành công"
              >
                <h2>Thêm sản phẩm thành công</h2>
                {/* Nội dung thông báo và nút đóng Modal */}
              </Modal>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default AddProduct;
