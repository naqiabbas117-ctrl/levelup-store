import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Level<span>Up</span>
      </div>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#shop">SHOP</a>
        <a href="#about">ABOUT US</a>
        <a href="#why">WHY LEVELUP</a>
        <a href="#reviews">REVIEWS</a>
        <a href="#contact">CONTACT</a>
      </div>

      <div className="nav-icons">
        <span>⌕</span>
        <span>♙</span>
        <span>🛒</span>
      </div>
    </nav>
  );
}

export default Navbar;