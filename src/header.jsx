import React from "react";
import { Link} from 'react-router-dom';

function Header() {
  return (
  <div class="header">
    <div class="header-content">
      <div class="logo"><img src='https://tse4.mm.bing.net/th?id=OIP.yvZLRY_2KfzeIG5glrJwPAExDM&pid=Api&P=0&h=180' width="150px"></img></div>
      <div className="search-item">
        <input type="text" name="search" id="" width="120%"/>
      </div>
    </div>
    <div class="header-menu">
      <div class="item-menu">
        <Link to='/HomePage'>TRANG CHỦ</Link>
        <Link to='#'>KHUYẾN MẠI</Link>
        <Link to='#'>GAMING</Link>
        <Link to='/Admin'>ADMIN</Link>
        <Link to='#'>LIÊN HỆ</Link>
        <Link to="/checkout"><img src="https://tse1.mm.bing.net/th?id=OIP.2vS-81E5QzQwuBzkbEHvcQHaHF&pid=Api&P=0&h=180" alt="" width="40px" /></Link>
      </div>
    </div>
  </div>

  );
}

export default Header;
