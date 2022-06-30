import React from "react";
import BasicTabs from "../TabPanel/TabPanel";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="bg-overlay">
        <div className="hero-section__container container">
          <h3 className="hero-title">Search and Book Flights and Hotels</h3>
          <div className="tabpanel__container">
            <BasicTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
