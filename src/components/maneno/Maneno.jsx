import React, {Component} from "react";
import {Link} from "react-router-dom";
import ManenoOrodha from "./ManenoOrodha";
import Kichwa from "../mpangilio/Kichwa";
import Tafuta from "../mpangilio/Tafuta";
import Sakafu from "../mpangilio/Sakafu";

class Maneno extends Component {
    render() {
        return (
            <React.Fragment>
                <Kichwa/>
                <Tafuta/>
                <div className="container">
                    <div>
                        <Link to="/maneno">
                            <h1 className="section-header">Maneno</h1>
                        </Link>
                    </div>
                    <div className="row">
                        <ManenoOrodha/>
                    </div>
                </div>
                <Sakafu/>
            </React.Fragment>
        );
    }
}

export default Maneno;
