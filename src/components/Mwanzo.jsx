import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import Maneno from "./maneno/Maneno";
import Nahau from "./nahau/Nahau";
import Header from "./mpangilio/Kichwa";

export default class Mwanzo extends Component {
  state = {
    redirect: true,
    maneno: [],
    nahau: []
  };
  componentDidMount() {
    Axios.get("http://192.168.43.116/sample/tulivyo/api/products.json").then(
      res => this.setState({ maneno: res.data })
    );
    Axios.get("http://192.168.43.116/sample/tulivyo/api/products.json").then(
      res => this.setState({ nahau: res.data })
    );
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/kuhusu" />;
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Header />
        <div className="container">
          <div>
            <h1>Maneno</h1>
          </div>
          <div className="row">
            <Maneno maneno={this.state.maneno} />
          </div>
        </div>
        <div className="container">
          <div>
            <h1>Nahau</h1>
          </div>
          <div className="row">
            <Nahau nahau={this.state.nahau} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
