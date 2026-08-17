import React from "react";
import "./BrandStory.css";

import packageImage from "../assets/images/Package.jpg";
function BrandStory() {
  return (
    <section className="brand-story" id="about">
      <div className="brand-story-image">
        <img src={packageImage} alt="LevelUp packaging" />
      </div>

      <div className="brand-story-content">
        <p className="story-label">THE LEVELUP STANDARD</p>

        <h2>
          QUALITY YOU
          <br />
          <span>CAN FEEL.</span>
        </h2>

        <p className="story-text">
          LevelUp is built around a simple idea — everyday essentials
          should feel as good as they look.
        </p>

        <p className="story-text">
          From the fabric we choose to the way every product is
          packaged, we focus on comfort, quality and a clean fit.
        </p>

        <button className="story-button">
          DISCOVER LEVELUP
        </button>
      </div>
    </section>
  );
}

export default BrandStory;