import React, { useState, useEffect } from "react";
import axios from "axios";

function EditStudentForm({ id, onEdit }) {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        hometown: "",
        phone: "",
        image: "",
    });

    useEffect(() => {
        axios
            .get(`https://63a571e42a73744b008e23ee.mockapi.io/contact/${id}`)
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const editStudent = () => {
        axios
            .put(`https://63a571e42a73744b008e23ee.mockapi.io/contact/${id}`, formData)
            .then((response) => {
                onEdit(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div>
            <h2 align="center">Edit Student</h2>
            <form>
                <table align="center">
                    <tr>
                        <td>
                            <label>Họ tên:</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Giới tính:</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Quê quán:</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="hometown"
                                value={formData.hometown}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Số điện thoại:</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Hình ảnh:</label>
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
                </table>
                <button className="button" type="button" id="submit2" onClick={editStudent}>
                    Update Student
                </button>
            </form>
        </div>
    );
}

export default EditStudentForm;

