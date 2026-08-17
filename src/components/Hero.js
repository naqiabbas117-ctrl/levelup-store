import React from "react";
import "./Hero.css";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="cinematic-hero">

      {/* Background image */}
      <div className="hero-image">
        <img src={heroImage} alt="LevelUp men's vest" />
      </div>

      {/* Dark cinematic overlay */}
      <div className="hero-overlay"></div>

      {/* Top small label */}
      <div className="hero-label">
        LEVELUP / MEN'S ESSENTIALS
      </div>

      {/* Main content */}
      <div className="hero-content">

        <p className="hero-eyebrow">
          BUILT FOR EVERY MOVE
        </p>

   <div className="levelup-logo">
  <span className="logo-level">Level</span>
  <span className="logo-up">Up</span>
</div>
        <p className="hero-description">
          Premium men's essentials designed for
          comfort, confidence and everyday movement.
        </p>

        <a href="#shop" className="hero-button">
          SHOP COLLECTION
          <span>→</span>
        </a>

      </div>

      {/* Bottom information */}
      <div className="hero-bottom">

        <div className="hero-scroll">
          <span className="scroll-line"></span>
          SCROLL TO EXPLORE
        </div>

        <div className="hero-availability">
          AVAILABLE IN
          <strong> BLACK / WHITE</strong>
        </div>

      </div>

    </section>
  );
}

export default Hero;