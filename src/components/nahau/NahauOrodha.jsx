import React, {Component} from "react";
import NahauKwenyeOrodha from "./NahauKwenyeOrodha";
import Axios from "axios";

class NahauOrodha extends Component {
    state = {
        redirect: false,
        nahau: []
    };

    componentDidMount() {
        Axios.get(process.env.REACT_APP_API_URL + "/nahau").then(
            res => this.setState({nahau: res.data._embedded.nahau})
        );
    }

    render() {
        return this.state.nahau.map(nahauMoja => (
            <NahauKwenyeOrodha key={nahauMoja.id} nahauMoja={nahauMoja}/>
        ));
    }
}

export default NahauOrodha;
