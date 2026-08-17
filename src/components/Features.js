import React from "react";
import "./Features.css";

const features = [
  {
    number: "01",
    title: "PREMIUM COTTON",
    description:
      "Soft, high-quality fabric designed for everyday comfort.",
  },
  {
    number: "02",
    title: "BREATHABLE",
    description:
      "Lightweight and breathable material that keeps you comfortable.",
  },
  {
    number: "03",
    title: "MAXIMUM COMFORT",
    description:
      "A comfortable fit designed for movement throughout the day.",
  },
  {
    number: "04",
    title: "BUILT TO LAST",
    description:
      "Made with quality materials for long-lasting everyday wear.",
  },
];

function Features() {
  return (
    <section className="features-section" id="why">

      <div className="features-heading">
        <p>WHY LEVELUP</p>

        <h2>
          COMFORT THAT
          <br />
          <span>MOVES WITH YOU.</span>
        </h2>

        <p className="features-subtitle">
          Designed for men who don't compromise on comfort,
          quality or style.
        </p>
      </div>

      <div className="features-grid">

        {features.map((feature) => (
          <div className="feature-card" key={feature.number}>

            <span className="feature-number">
              {feature.number}
            </span>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;