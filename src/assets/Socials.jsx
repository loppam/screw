import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <Link to="https://www.instagram.com/">
        <FaInstagram className="ig" />
      </Link>
      <Link to="https://wa.me/+2348100908752">
        <FaWhatsapp className="wa" />
      </Link>
    </div>
  );
};

export default Socials;
