import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import Maneno from "./maneno/Maneno";
import Nahau from "./nahau/Nahau";
import Kichwa from "./mpangilio/Kichwa";
import Tafuta from "./mpangilio/Tafuta";
import Sakafu from "./mpangilio/Sakafu";

export default class Mwanzo extends Component {
  state = {
    redirect: false,
    maneno: [],
    nahau: []
  };
  // res => this.setState({ maneno: res.data._embeded.maneno })
  // function (response) {
  //   // handle success
  //   console.log(response.data._embedded);
  // }
  // Axios.get(process.env.REACT_APP_API_URL + "/maneno").then(
  //     res => this.setState({ maneno: res.data._embeded.maneno })
  // );
  componentDidMount() {
    Axios.get("http://localhost/sample/kamusi/api/maneno.json").then(
        res => this.setState({ maneno: res.data })
    );
    // Axios.get(process.env.REACT_APP_API_URL + "/maneno").then(
    //     res => this.setState({ maneno: res.data._embeded.maneno })
    // );
    Axios.get("http://localhost/sample/kamusi/api/nahau.json").then(
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
        <Kichwa />
        <Tafuta />
        <div className="container">
          <div>
            <h1 className="section-header">Maneno</h1>
          </div>
          <div className="row">
            <Maneno maneno={this.state.maneno} />
          </div>
        </div>
        <div className="container">
          <div>
            <h1 className="section-header">Nahau</h1>
          </div>
          <div className="row">
            <Nahau nahau={this.state.nahau} />
          </div>
        </div>
        <Sakafu />
      </React.Fragment>
    );
  }
}
