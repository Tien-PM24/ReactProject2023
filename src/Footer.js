import React from 'react';

function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="box">
          <h3>Quick Links</h3>
          <a href="#home"> Home </a>
          <a href="#about">About </a>
          <a href="#products "> Products</a>
          <a href="#review"> Review</a>
          <a href="#contact">Contact </a>
        </div>
        <div class="box">
          <h3>Extra Links</h3>
          <a href="#"> My Account </a>
          <a href="#">My Order </a>
          <a href="# "> My Favorite</a>
        </div>
        <div class="box">
          <h3>Locations</h3>
          <a href="#"> Tangier</a>
          <a href="#"> Hoceima </a>
          <a href="# "> Tetouan</a>
          <a href="#"> Marrakesh</a>
          <a href="#">Ifran</a>
        </div>
        <div class="box">
          <h3>Contact Info</h3>
          <p>+123-456-7890</p>
          <p>yourmail@gmil.com</p>
          <p>Tangier,Morocco</p>
          <img src="images/payment.png" alt="" />
        </div>
      </div>
      <div class="copyright">
        <p>Created By <span>Bilal Elemrani </span></p>
        <p>All Right Reserved 2022</p>
      </div>
    </footer>
  );
}

export default Footer;