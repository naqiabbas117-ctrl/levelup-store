import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Level<span>Up</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
        <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT US</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>WHY LEVELUP</a>
        <a href="#reviews" onClick={() => setMenuOpen(false)}>REVIEWS</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
      </div>

      <div className="nav-icons">
        <span>⌕</span>
        <span>♙</span>
        <span>🛒</span>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
