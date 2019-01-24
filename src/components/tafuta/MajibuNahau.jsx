import React from "react";
import { Link } from "react-router-dom";
import NahauOrodha from "../nahau/NahauOrodha";

export default function MajibuNahau(props) {
  if (props.nahau.length === 0) return <React.Fragment />;

  return (
    <div className="container">
      <div>
        <Link to="/nahau">
          <h1 className="section-header">Nahau</h1>
        </Link>
      </div>
      <div className="row">
        <NahauOrodha nahau={props.nahau} />
      </div>
    </div>
  );
}
