import React, {Component} from "react";
import NahauKwenyeOrodha from "./NahauKwenyeOrodha";
import Axios from "axios";

class NahauOrodha extends Component {
    state = {
        redirect: false,
        nahau: []
    };

    componentDidMount() {
        Axios.get("http://localhost/sample/kamusi/api/nahau.json").then(
            res => this.setState({nahau: res.data})
        );
    }

    render() {
        return this.state.nahau.map(nahauMoja => (
            <NahauKwenyeOrodha key={nahauMoja.id} nahauMoja={nahauMoja}/>
        ));
    }
}

export default NahauOrodha;
