import React from 'react';
import "../style/header";

function Header() {
  return (
    <header>
      <input type="checkbox" id="button" />
      <label for="button"><i class="fa-solid fa-bars"></i></label>
      <a href="#" class="logo">Flower <span>&#8226;</span></a>

      <nav>
        <a href="#home">Home</a>
        <a href="#about"> About </a>
        <a href="#products "> Product </a>
        <a href="#review "> Review </a>
        <a href="#contact"> Contact </a>
      </nav>
      <div class="icons">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-user"></i>
      </div>
    </header>
  );
}

export default Header;
