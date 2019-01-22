import React from "react";
import logo from "../../assets/images/logo.png";

export default function About() {
  return (
    <div className="container">
      <div className="about">
        <img src={logo} className="about-logo" alt="logo" />
        <p className="about-tagline">
            Jitihadi ya kutengeneza kamusi ya Kiswahili ya kisasa na pana kwa ajili ya mtandao.
        </p>
      </div>
    </div>
  );
}
