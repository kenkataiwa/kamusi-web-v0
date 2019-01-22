import React, { Component } from "react";
import NenoMoja from "./NenoMoja";
import PropTypes from "prop-types";

class Maneno extends Component {
  render() {
    return this.props.maneno.map(neno => (
      <NenoMoja key={neno.id} neno={neno} />
    ));
  }
}

// PropTypes
Maneno.propTypes = {
  maneno: PropTypes.array.isRequired
};

export default Maneno;
