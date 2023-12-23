import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <div className="content">
        <div className="flex">
          <div className="product1">
            <img src="/image1.png" alt="" />
            <h3>24-In-1 Screwdriver Set </h3>
            <p>₦25,000.00</p>
            <Link to="https://wa.link/y0stbq">Buy Now</Link>
          </div>
          <div className="product2">
            <img src="/image2.png" alt="" />
            <h3>31-In-1 Screwdriver Set </h3>
            <p>₦35,000.00</p>
            <Link to="https://wa.link/nlkgxj">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
