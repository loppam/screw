import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="flex">
          <div className="flex_txt">
            <h1>
              Screw Smarter, Not Harder <br />
              <span className="smal">Discover Innovation in Every Turn!</span>
            </h1>
            <p>
              Our innovative screwdrivers redefine precision, making every turn
              a step into craftsmanship. Discover the art of effortless work
              with tools designed for innovation. Turn to excellence, turn with
              us.
            </p>
            <Link to="https://wa.link/bqc0a9" className="order">Buy Now</Link>
          </div>

          <div className="flex_img">
            <img src="/headscrew.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
