import React, {Component} from "react";
import PropTypes from "prop-types";

class NenoMaanaMoja extends Component {
    render() {
        const {meaning} = this.props.maana;
        return (
            <div className="part">
                <div className="definition">
                    {meaning}
                </div>
            </div>
        );
    }
}

// PropTypes
NenoMaanaMoja.propTypes = {
    maana: PropTypes.object.isRequired
};

export default NenoMaanaMoja;
