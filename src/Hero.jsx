
import React from "react";
import "./App.css";

function Hero({ image, text, }) {
  return (
    <div className="hero">
      <img src={image} alt="fond de la bannière" />
      {text && (
        <div className="overlay">
          <h1>{text}</h1>
        </div>
      )}
    </div>
  );
}

export default Hero;
