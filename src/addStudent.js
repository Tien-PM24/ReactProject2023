import React, { useState } from "react";
import axios from "axios";

function AddStudentForm({ onAdd }) {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        hometown: "",
        phone: "",
        image: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addStudent = () => {
        axios
            .post("https://63a571e42a73744b008e23ee.mockapi.io/contact", formData)
            .then((response) => {
                onAdd(response.data);
                setFormData({
                    name: "",
                    gender: "",
                    hometown: "",
                    phone: "",
                    image: "",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h2 align="center">Add Student</h2>
            <form>
                <table align="center">
                    <tr>
                        <td><label>Họ tên:</label></td>
                        <td><input type="text" name="name" value={formData.name} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Giới tính:</label></td>
                        <td><input type="text" name="gender" value={formData.gender} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Quê quán:</label></td>
                        <td><input type="text" name="hometown" value={formData.hometown} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Số điện thoại:</label></td>
                        <td><input type="text" name="phone" value={formData.phone} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Hình ảnh:</label></td>
                        <td><input type="text" name="image" value={formData.image} onChange={handleInputChange} /></td>
                    </tr>
                    <button className="button" type="button" id="submit2" onClick={addStudent}>Add Student</button>
                    <br />
                    <br />
                </table>
            </form>
        </div>
    );
}

export default AddStudentForm;
