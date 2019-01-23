import React, {Component} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import NenoMaanaMoja from "./NenoMaanaMoja";
import NenoMaana from "./NenoMaana";
import Kichwa from "../mpangilio/Kichwa";
import Tafuta from "../mpangilio/Tafuta";
import Sakafu from "../mpangilio/Sakafu";

class NenoMoja extends Component {
    state = {
        redirect: false,
        neno: {}
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        Axios.get(process.env.REACT_APP_API_URL + "/maneno/" + params.id).then(
            res => this.setState({neno: res.data})
        );
    }

    renderDefinitions = () => {
        if (typeof this.state.neno.meanings === 'undefined')
            return <React.Fragment/>;

        const definitionsCount = this.state.neno.meanings.length;
        if (definitionsCount === 1)
            return this.state.neno.meanings.map(maana => (
                <NenoMaanaMoja key={maana.id} maana={maana}/>
            ));
        else if (definitionsCount > 1)
            return (
                <ol>
                    <NenoMaana meanings={this.state.neno.meanings}/>
                </ol>
            );
        // Catch for empty set as well
    };

    render() {
        const {id, word} = this.state.neno;
        return (
            <React.Fragment>
                <Kichwa/>
                <Tafuta/>
                <div className="container">
                    <div className="col-md-6 col-sm-12">
                        <div className="kamusi-item">
                            <Link to={"/neno/" + id} className="title">
                                {word}
                            </Link>
                            <div className="pronounce">{this.state.neno.pronunciation}</div>
                        </div>
                        <div className="type-definitions">
                            {this.renderDefinitions()}
                        </div>
                    </div>
                </div>
                <Sakafu/>
            </React.Fragment>
        );
    }
}

export default NenoMoja;
