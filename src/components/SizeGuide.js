import React from "react";
import "./SizeGuide.css";

function SizeGuide() {
  const sizes = [
    { size: "S", chest: "34 - 36", length: "26" },
    { size: "M", chest: "36 - 38", length: "27" },
    { size: "L", chest: "38 - 40", length: "28" },
    { size: "XL", chest: "40 - 42", length: "29" },
  ];

  return (
    <section className="size-section" id="sizes">

      <div className="size-content">
        <p className="size-label">FIND YOUR FIT</p>

        <h2>
          YOUR SIZE.
          <br />
          <span>YOUR COMFORT.</span>
        </h2>

        <p className="size-description">
          Choose the size that fits you best. LevelUp is designed
          for a comfortable everyday fit.
        </p>

        <div className="color-options">
          <span>AVAILABLE COLORS</span>

          <div className="color-list">
            <div className="color-option">
              <span className="white-dot"></span>
              WHITE
            </div>

            <div className="color-option">
              <span className="black-dot"></span>
              BLACK
            </div>
          </div>
        </div>
      </div>

      <div className="size-table-wrapper">
        <h3>SIZE GUIDE</h3>

        <table className="size-table">
          <thead>
            <tr>
              <th>SIZE</th>
              <th>CHEST</th>
              <th>LENGTH</th>
            </tr>
          </thead>

          <tbody>
            {sizes.map((item) => (
              <tr key={item.size}>
                <td>{item.size}</td>
                <td>{item.chest}"</td>
                <td>{item.length}"</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="size-note">
          * Measurements shown are for demonstration purposes.
          Confirm actual measurements with LevelUp before launch.
        </p>
      </div>

    </section>
  );
}

export default SizeGuide;