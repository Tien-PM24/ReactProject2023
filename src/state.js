import React, { Component } from "react";

class SelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", class: "", address: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(
      "Đã lưu thông tin của sinh viên: \n" +
      "Họ tên: " +
      this.state.name +
      "\nLớp: " +
      this.state.class +
      "\nĐịa chỉ: " +
      this.state.address
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} align="center">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <br />

        <div>
          <label>Class:</label>
          <select
            value={this.state.class}
            name="class"
            onChange={this.handleInputChange}
          >
            <option value="PNV 23">PNV 23</option>
            <option value="PNV 24">PNV 24</option>
            <option value="PNV 25">PNV 25</option>
          </select>
        </div>

        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </div>
        <br />
        <button type="submit" id="submit">Submit</button>
      </form>
    );
  }
}


class GradeCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hk1: '',
      hk2: '',
      diemtrungbinh: '',
      ketqua: '',
      xeploai: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { hk1, hk2 } = this.state;
    const diemtrungbinh = (Number(hk1) + Number(hk2)) / 2;
    let xeploai = '';
    if (diemtrungbinh >= 9) {
      xeploai = 'Xuất sắc';
    } else if (diemtrungbinh >= 8) {
      xeploai = 'Giỏi';
    } else if (diemtrungbinh >= 6.5) {
      xeploai = 'Khá';
    } else if (diemtrungbinh >= 5) {
      xeploai = 'Trung bình';
    } else {
      xeploai = 'Yếu';
    }
    let ketqua = '';
    if (diemtrungbinh >= 5) {
      ketqua = 'Được lên lớp';
    } else {
      ketqua = 'Không được lên lớp';
    }
    this.setState({ diemtrungbinh, xeploai, ketqua });
  };

  render() {
    const { hk1, hk2, diemtrungbinh, xeploai, ketqua } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>KẾT QUẢ HỌC TẬP</h1>
        <table align="center">
          <tbody >
            <tr>
              <th><label>Điểm HK1:</label></th>
              <td><input type="number" name="hk1" value={hk1} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <th><label>Điểm HK2:</label></th>
              <td><input type="number" name="hk2" value={hk2} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <th><label>Điểm TB:</label></th>
              <td><input type="number" readOnly name="diemtrungbinh" value={diemtrungbinh} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <th><label>Kết quả:</label></th>
              <td><input type="text" readOnly name="ketqua" value={this.state.ketqua} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <th><label>Xếp loại:</label></th>
              <td><input type="text" readOnly name="xeploai" value={xeploai} onChange={this.handleInputChange} /></td>
            </tr>
            <tr>
              <td colSpan="2" align="center" ><button className="button" type="submit" id="submit">Xem kết quả</button></td>
            </tr>
          </tbody>
        </table>
      </form>
  
    );
  }
}

export { SelectForm, GradeCalculator };



//export default SelectForm;
