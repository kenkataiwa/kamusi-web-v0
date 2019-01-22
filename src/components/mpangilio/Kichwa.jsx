import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Kichwa() {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <div className="container">
        <div className="brand">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="" />
          </Link>
          <Link to="/">
            <h1 className="brand-name navbar-brand mb-0 h1">Kamusi</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
