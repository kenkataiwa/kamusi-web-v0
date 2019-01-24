import React, {Component} from "react";
import NenoKwenyeOrodha from "./NenoKwenyeOrodha";
import PropTypes from 'prop-types';
import Axios from "axios";

class ManenoOrodha extends Component {
    state = {
        redirect: false,
        maneno: []
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.maneno !== this.props.maneno){
            this.setState({maneno:nextProps.maneno});
        }
    }

    componentDidMount() {
        if (typeof this.props.maneno !== 'undefined') {
            this.setState({maneno: this.props.maneno});
        } else {
            Axios.get(process.env.REACT_APP_API_URL + "/maneno").then(
                res => this.setState({maneno: res.data._embedded.maneno})
            );
        }
    }

    render() {
        return this.state.maneno.map(neno => (
            <NenoKwenyeOrodha key={neno.id} neno={neno}/>
        ));
    }
}

// PropTypes
ManenoOrodha.propTypes = {
    maneno: PropTypes.array
};

export default ManenoOrodha;
