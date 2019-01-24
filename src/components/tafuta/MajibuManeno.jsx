import React from "react";
import { Link } from "react-router-dom";
import ManenoOrodha from "../maneno/ManenoOrodha";

export default function MajibuManeno(props) {
  if (props.maneno.length === 0) return <React.Fragment />;

  return (
    <div className="container">
      <div>
        <Link to="/maneno">
          <h1 className="section-header">Maneno</h1>
        </Link>
      </div>
      <div className="row">
        <ManenoOrodha maneno={props.maneno} />
      </div>
    </div>
  );
}
