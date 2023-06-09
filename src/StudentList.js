
import React from 'react';
import data from "./21pnv1a.json";
function StudentList() {
  return (
    <div>
      <h2>Danh sách sinh viên lớp 21PNV1A</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Quê quán</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {data.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.hometown}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;