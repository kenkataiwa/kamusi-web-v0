import React, {Component} from "react";
import {Link} from "react-router-dom";
import Kichwa from "../mpangilio/Kichwa";
import Tafuta from "../mpangilio/Tafuta";
import Sakafu from "../mpangilio/Sakafu";
import NahauOrodha from "./NahauOrodha";

class Nahau extends Component {
    render() {
        return (
            <React.Fragment>
                <Kichwa/>
                <Tafuta/>
                <div className="container">
                    <div>
                        <Link to="/nahau">
                            <h1 className="section-header">Nahau</h1>
                        </Link>
                    </div>
                    <div className="row">
                        <NahauOrodha/>
                    </div>
                </div>
                <Sakafu/>
            </React.Fragment>
        );
    }
}

export default Nahau;
