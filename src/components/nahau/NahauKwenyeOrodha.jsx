import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NahauMaanaMoja from "./NahauMaanaMoja";
import NahauMaana from "./NahauMaana";

class NahauKwenyeOrodha extends Component {
    renderDefinitions = () => {
        const definitionsCount = this.props.nahauMoja.meanings.length;
        if (definitionsCount === 1)
            return this.props.nahauMoja.meanings.map(maana => (
                <NahauMaanaMoja key={maana.id} maana={maana}/>
            ));
        else if (definitionsCount > 1)
            return (
                <ol>
                    <NahauMaana meanings={this.props.nahauMoja.meanings}/>
                </ol>
            );
        // Catch for empty set as well
    };

    render() {
        const {id, phrase} = this.props.nahauMoja;
        return (
            <div className="col-md-6 col-sm-12">
                <div className="kamusi-item">
                    <Link to={"/nahau/" + id} className="title">
                        {phrase}
                    </Link>
                    <div className="type-definitions">
                        {this.renderDefinitions()}
                    </div>
                </div>
            </div>
        );
    }
}

// PropTypes
NahauKwenyeOrodha.propTypes = {
    nahauMoja: PropTypes.object.isRequired
};

export default NahauKwenyeOrodha;
