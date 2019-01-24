import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import ManenoOrodha from "./maneno/ManenoOrodha";
import NahauOrodha from "./nahau/NahauOrodha";
import Kichwa from "./mpangilio/Kichwa";
import Tafuta from "./mpangilio/Tafuta";
import Sakafu from "./mpangilio/Sakafu";

export default class Mwanzo extends Component {
    state = {
        redirect: false
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/kuhusu"/>;
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
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
                <div className="container">
                    <div>
                        <Link to="/nahau">
                            <h1 className="section-header">Nahau</h1>
                        </Link>
                    </div>
                    <div className="row">
                        <NahauOrodha />
                    </div>
                </div>
                <Sakafu/>
            </React.Fragment>
        );
    }
}
