import React from "react";
import "./Instagram.css";

import whiteVest from "../assets/images/hero.jpg";
import blackVest from "../assets/images/heroblack.jpg";
import packageImage from "../assets/images/hero.jpg";
import lifestyleImage from "../assets/images/hero.jpg";

function Instagram() {
  const posts = [
    whiteVest,
    blackVest,
    packageImage,
    lifestyleImage,
  ];

  return (
    <section className="instagram-section">

      <div className="instagram-heading">
        <p>FOLLOW LEVELUP</p>

        <h2>
          EVERYDAY.
          <br />
          <span>LEVEL UP.</span>
        </h2>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="instagram-handle"
        >
          @levelup
        </a>
      </div>

      <div className="instagram-grid">
        {posts.map((image, index) => (
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="instagram-post"
            key={index}
          >
            <img src={image} alt={`LevelUp Instagram post ${index + 1}`} />

            <div className="instagram-overlay">
              VIEW POST
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}

export default Instagram;