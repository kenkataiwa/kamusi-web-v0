import React, {Component} from "react";
import PropTypes from "prop-types";
import NenoMaanaMoja from "./NenoMaanaMoja";
import NenoMaana from "./NenoMaana";

class NenoKwenyeOrodha extends Component {
    renderDefinitions = () => {
        const definitionsCount = this.props.neno.meanings.length;
        if (definitionsCount === 1)
            return this.props.neno.meanings.map(maana => (
                <NenoMaanaMoja key={maana.id} maana={maana}/>
            ));
        else if (definitionsCount > 1)
            return (
                <ol>
                    <NenoMaana meanings={this.props.neno.meanings}/>
                </ol>
            );
        // Catch for empty set as well
    };

    render() {
        const {id, word} = this.props.neno;
        return (
            <div className="col-md-6 col-sm-12">
                <div className="kamusi-item">
                    <a href={"/neno/" + id} className="title">
                        {word}
                    </a>
                    <div className="pronounce">{this.props.neno.pronunciation}</div>
                </div>
                <div className="type-definitions">
                    {this.renderDefinitions()}
                </div>
            </div>
        );
    }
}

// PropTypes
NenoKwenyeOrodha.propTypes = {
    neno: PropTypes.object.isRequired
};

export default NenoKwenyeOrodha;
