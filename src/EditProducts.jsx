import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function EditProduct({ fetchProducts }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    laptop_name: "",
    price: "",
    description: "",
    image: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://63a571e42a73744b008e23ee.mockapi.io/products/${id}`
      );
      const product = response.data;
      setFormData({
        laptop_name: product.laptop_name,
        price: product.price,
        description: product.description,
        image: product.image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateProduct = async () => {
    try {
      await axios.put(
        `https://63a571e42a73744b008e23ee.mockapi.io/products/${id}`,
        formData
      );
      fetchProducts();
      setIsSuccess(true); // Set isSuccess to true after successful update
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>
        Edit Product{" "}
        <button className="submit4">
          <Link to="/Admin" style={{ textDecoration: "none", color: "orange" }}>
            Back to Admin
          </Link>
        </button>
      </h2>
      <form>
        <table align="center">
          <tbody>
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
                <button
                  type="button"
                  className="submit2"
                  style={{ width: "25%" }}
                  onClick={updateProduct}
                >
                  Save
                </button>
              </td>
            </tr>
            {isSuccess && (
              <tr>
                <td></td>
                <td>
                  <div style={{ color: "green", marginTop: "10px" }}>
                    Update successful!
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EditProduct;
