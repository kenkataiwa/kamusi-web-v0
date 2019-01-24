import React, {Component} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import NahauMaanaMoja from "./NahauMaanaMoja";
import NahauMaana from "./NahauMaana";
import Kichwa from "../mpangilio/Kichwa";
import Tafuta from "../mpangilio/Tafuta";
import Sakafu from "../mpangilio/Sakafu";

class NahauMoja extends Component {
    state = {
        redirect: false,
        nahau: {}
    };

    componentDidMount() {
        const {match: {params}} = this.props;
        Axios.get(process.env.REACT_APP_API_URL + "/nahau/" + params.id).then(
            res => this.setState({nahau: res.data})
        );
    }

    renderDefinitions = () => {
        if (typeof this.state.nahau.meanings === 'undefined')
            return <React.Fragment/>;

        const definitionsCount = this.state.nahau.meanings.length;
        if (definitionsCount === 1)
            return this.state.nahau.meanings.map(maana => (
                <NahauMaanaMoja key={maana.id} maana={maana}/>
            ));
        else if (definitionsCount > 1)
            return (
                <ol>
                    <NahauMaana meanings={this.state.nahau.meanings}/>
                </ol>
            );
        // Catch for empty set as well
    };

    render() {
        const {id, phrase} = this.state.nahau;
        return (
            <React.Fragment>
                <Kichwa/>
                <Tafuta/>
                <div className="container">
                    <div className="row">
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
                    </div>
                </div>
                <Sakafu/>
            </React.Fragment>
        );
    }
}

export default NahauMoja;
