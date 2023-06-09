import React, { useState } from "react";
import axios from "axios";

function DeleteProduct({ product, fetchProducts }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (confirmDelete) {
      const deleteProduct = async () => {
        try {
          await axios.delete(`https://63a571e42a73744b008e23ee.mockapi.io/products/${product.id}`);
          fetchProducts();
        } catch (error) {
          console.log(error);
        }
      };

      deleteProduct();
    } else {
      const shouldDelete = window.confirm("Are you sure you want to delete this product?");

      if (shouldDelete) {
        setConfirmDelete(true);
      }
    }
  };

  return (
    <button className="submit3" onClick={handleDelete}>Delete</button>
  );
}

export default DeleteProduct;
