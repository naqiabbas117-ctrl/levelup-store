import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            Level<span>Up</span>
          </div>

          <p className="footer-description">
            Premium men's vests designed for comfort,
            movement and everyday confidence.
          </p>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              WA
            </a>
          </div>

        </div>

        {/* Shop */}
        <div className="footer-column">

          <h3>SHOP</h3>

          <ul className="footer-links">
            <li>
              <a href="#shop">All Products</a>
            </li>

            <li>
              <a href="#shop">White Vests</a>
            </li>

            <li>
              <a href="#shop">Black Vests</a>
            </li>

            <li>
              <a href="#sizes">Size Guide</a>
            </li>
          </ul>

        </div>

        {/* Company */}
        <div className="footer-column">

          <h3>COMPANY</h3>

          <ul className="footer-links">
            <li>
              <a href="#about">About LevelUp</a>
            </li>

            <li>
              <a href="#why">Why LevelUp</a>
            </li>

            <li>
              <a href="#reviews">Reviews</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

        </div>

        {/* Contact */}
        <div className="footer-column">

          <h3>GET IN TOUCH</h3>

          <div className="footer-contact">

            <p>
              Pakistan
            </p>

            <p>
              <a href="tel:+923000000000">
                +92 300 0000000
              </a>
            </p>

            <p>
              <a href="mailto:levelup@example.com">
                levelup@example.com
              </a>
            </p>

            <p>
              Mon - Sat
              <br />
              10:00 AM - 8:00 PM
            </p>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} LevelUp. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;