import React, { Component } from "react";
import NenoSingle from "./NenoMoja";
import PropTypes from "prop-types";

class Maneno extends Component {
  render() {
    return this.props.maneno.map(neno => (
      <NenoSingle key={neno.id} neno={neno} />
    ));
  }
}

// PropTypes
Maneno.propTypes = {
  maneno: PropTypes.array.isRequired
};

export default Maneno;
