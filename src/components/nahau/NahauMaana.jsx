import React, {Component} from "react";
import PropTypes from "prop-types";
import NahauMaanaNyingi from "./NahauMaanaNyingi";

class NahauMaana extends Component {
    render() {
        return this.props.meanings.map(maana => (
            <NahauMaanaNyingi key={maana.id} maana={maana} />
        ));
    }
}


// PropTypes
NahauMaana.propTypes = {
    meanings: PropTypes.array.isRequired
};

export default NahauMaana;
