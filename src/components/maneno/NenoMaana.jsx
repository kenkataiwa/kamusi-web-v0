import React, {Component} from "react";
import PropTypes from "prop-types";
import NenoMaanaNyingi from "./NenoMaanaNyingi";

class NenoMaana extends Component {
    render() {
        // console.log(this.props.meanings);
        return this.props.meanings.map(maana => (
            <NenoMaanaNyingi key={maana.id} maana={maana} />
        ));
    }
}


// PropTypes
NenoMaana.propTypes = {
    meanings: PropTypes.array.isRequired
};

export default NenoMaana;
