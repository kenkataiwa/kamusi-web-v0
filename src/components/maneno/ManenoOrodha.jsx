import React, {Component} from "react";
import NenoKwenyeOrodha from "./NenoKwenyeOrodha";
import Axios from "axios";

class ManenoOrodha extends Component {
    state = {
        redirect: false,
        maneno: []
    };

    componentDidMount() {
        Axios.get(process.env.REACT_APP_API_URL + "/maneno").then(
            res => this.setState({maneno: res.data._embedded.maneno})
        );
    }

    render() {
        return this.state.maneno.map(neno => (
            <NenoKwenyeOrodha key={neno.id} neno={neno}/>
        ));
    }
}

export default ManenoOrodha;
