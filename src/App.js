import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import BrandStory from "./components/BrandStory";
import SizeGuide from "./components/SizeGuide";
import Reviews from "./components/Reviews";
// import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Hero />

      <Products />

      <Features />

      <BrandStory />

      <SizeGuide />

      <Reviews />

      {/* <Instagram /> */}

      <Footer />

    </div>
  );
}

export default App;