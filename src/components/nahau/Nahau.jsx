import React, { Component } from "react";
import NahauMoja from "./NahauMoja";
import PropTypes from "prop-types";

class Nahau extends Component {
  render() {
    return this.props.nahau.map(nahauMoja => (
      <NahauMoja key={nahauMoja.id} nahauMoja={nahauMoja} />
    ));
  }
}

// PropTypes
Nahau.propTypes = {
  Nahau: PropTypes.array.isRequired
};

export default Nahau;
