import React, { Component } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";
import Axios from "axios";
import MpangilioTafuta from "../mpangilio/Tafuta";
import Kichwa from "../mpangilio/Kichwa";
import Sakafu from "../mpangilio/Sakafu";
import { withRouter } from "react-router";
import MajibuManeno from "./MajibuManeno";
import MajibuNahau from "./MajibuNahau";
import MajibuMatupu from "./MajibuMatupu";

class Tafuta extends Component {
  state = {
    redirect: false,
    maneno: [],
    nahau: []
  };

  search = tafuta => {
    Axios.get(
      process.env.REACT_APP_API_URL + "/tafuta?q=" + tafuta + "&limit=10"
    ).then(res =>
      this.setState({
        maneno: res.data.results.maneno,
        nahau: res.data.results.nahau
      })
    );
  };

  chainSearch = tafuta => {
    this.search(tafuta);
  };

  componentDidMount() {
    const { location } = this.props;
    let params = queryString.parse(location.search);
    this.setState({ tafuta: params.q });
    this.search(params.q);
  }

  render() {
    return (
      <React.Fragment>
        <Kichwa />
        <MpangilioTafuta chainSearch={this.chainSearch} />
        <MajibuManeno maneno={this.state.maneno} />
        <MajibuNahau nahau={this.state.nahau} />
        <MajibuMatupu maneno={this.state.maneno} nahau={this.state.nahau} />
        <Sakafu />
      </React.Fragment>
    );
  }
}

// PropTypes
Tafuta.propTypes = {
  maneno: PropTypes.array,
  nahau: PropTypes.array
};

export default withRouter(Tafuta);
