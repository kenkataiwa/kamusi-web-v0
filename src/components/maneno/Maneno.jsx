import React, {Component} from "react";
import Axios from "axios";
import ManenoOrodha from "./ManenoOrodha";
import Kichwa from "../mpangilio/Kichwa";
import Tafuta from "../mpangilio/Tafuta";
import Sakafu from "../mpangilio/Sakafu";
import {Link} from "react-router-dom";

class Maneno extends Component {
    componentDidMount() {
        Axios.get("http://localhost/sample/kamusi/api/maneno.json").then(
            res => this.setState({maneno: res.data})
        );
    }

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
