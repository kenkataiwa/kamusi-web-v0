import React, {Component} from "react";
import PropTypes from "prop-types";

class NahauMaanaNyingi extends Component {
    render() {
        const {meaning} = this.props.maana;
        return (
            <li className="part">
                <div className="definition">
                    {meaning}
                </div>
            </li>
        );
    }
}

// PropTypes
NahauMaanaNyingi.propTypes = {
    maana: PropTypes.object.isRequired
};

export default NahauMaanaNyingi;
