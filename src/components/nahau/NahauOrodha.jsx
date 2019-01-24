import React, {Component} from "react";
import NahauKwenyeOrodha from "./NahauKwenyeOrodha";
import PropTypes from 'prop-types';
import Axios from "axios";

class NahauOrodha extends Component {
    state = {
        redirect: false,
        nahau: []
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.nahau !== this.props.nahau){
            this.setState({nahau:nextProps.nahau});
        }
    }

    componentDidMount() {
        if (typeof this.props.nahau !== 'undefined') {
            this.setState({nahau: this.props.nahau})
        } else {
            Axios.get(process.env.REACT_APP_API_URL + "/nahau").then(
                res => this.setState({nahau: res.data._embedded.nahau})
            );
        }
    }

    render() {
        return this.state.nahau.map(nahauMoja => (
            <NahauKwenyeOrodha key={nahauMoja.id} nahauMoja={nahauMoja}/>
        ));
    }
}

// PropTypes
NahauOrodha.propTypes = {
    nahau: PropTypes.array
};

export default NahauOrodha;
