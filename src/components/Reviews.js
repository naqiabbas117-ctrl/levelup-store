import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Muhammad Hamza",
    review:
      "Really comfortable vest. The fabric feels soft and the fitting is great.",
    rating: "★★★★★",
  },
  {
    name: "Ali Raza",
    review:
      "I ordered the black one and honestly the quality is better than I expected.",
    rating: "★★★★★",
  },
  {
    name: "Usman Khan",
    review:
      "Good fitting, comfortable material and delivery was quick. Recommended.",
    rating: "★★★★☆",
  },
];

function Reviews() {
  return (
    <section className="reviews-section" id="reviews">

      <div className="reviews-heading">
        <p>WHAT OUR CUSTOMERS SAY</p>

        <h2>
          MADE FOR
          <br />
          <span>EVERYDAY.</span>
        </h2>
      </div>

      <div className="reviews-grid">

        {reviews.map((item, index) => (
          <div className="review-card" key={index}>

            <div className="review-stars">
              {item.rating}
            </div>

            <p className="review-text">
              "{item.review}"
            </p>

            <div className="review-user">
              <div className="review-avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <span>Verified Customer</span>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;