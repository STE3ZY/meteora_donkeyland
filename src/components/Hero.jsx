import React from "react";
import herobg from "../images/hero-bg.jpg";

export default function Hero() {
  return (
    <div className="heroContainer w-full">
      <img src={herobg} alt="hero background" className="w-full bg-cover" />
    </div>
  );
}
