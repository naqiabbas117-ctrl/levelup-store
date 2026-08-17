import React from "react";
import "./Products.css";

import heroImage from "../assets/images/hero.jpg";
import heroBlack from "../assets/images/heroblack.jpg";

const products = [
  {
    id: 1,
    name: "LevelUp Supreme Vest",
    color: "White",
    price: 799,
    image: heroImage,
  },
  {
    id: 2,
    name: "LevelUp Supreme Vest",
    color: "Black",
    price: 799,
    image: heroBlack,
  },
  {
    id: 3,
    name: "LevelUp Classic Vest",
    color: "White",
    price: 699,
    image: heroImage,
  },
  {
    id: 4,
    name: "LevelUp Classic Vest",
    color: "Black",
    price: 699,
    image: heroBlack,
  },
];
function Products() {
  return (
    <section className="products-section" id="shop">

      <div className="section-heading">
        <p>LEVELUP COLLECTION</p>
        <h2>BEST SELLERS</h2>
        <span>
          Premium comfort. Clean fit. Built for every move.
        </span>
      </div>

      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <div className="product-image">
              <img src={product.image} alt={product.name} />

              <span className="product-badge">
                BEST SELLER
              </span>
            </div>

            <div className="product-info">

              <p className="product-color">
                {product.color}
              </p>

              <h3>{product.name}</h3>

              <p className="product-price">
                Rs. {product.price}
              </p>

              <div className="sizes">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>

              <button className="add-cart">
                ADD TO CART
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="view-all">
        <button>VIEW ALL PRODUCTS</button>
      </div>

    </section>
  );
}

export default Products;