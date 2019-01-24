import React, {Component} from "react";
import {withRouter} from "react-router";
import queryString from 'query-string';
import PropTypes from "prop-types";

class Tafuta extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    state = {
        tafuta: '',
    };

    componentDidMount() {
        const {location} = this.props;
        let params = queryString.parse(location.search);
        if (typeof params.q !== 'undefined') {
            this.setState({tafuta: params.q});
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {history} = this.props;
        history.push('/tafuta?q=' + this.state.tafuta);
        if (typeof this.props.chainSearch !== 'undefined') {
            this.props.chainSearch(this.state.tafuta);
        }
    };
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="kamusi-search">
                        <form onSubmit={this.onSubmit}>
                            <input
                                value={this.state.tafuta}
                                onChange={this.onChange}
                                className="form-control form-control-lg"
                                name="tafuta"
                                type="text"
                                placeholder="Tafuta"
                                autoComplete="off"/>
                        </form>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

// PropTypes
Tafuta.propTypes = {
    chainSearch: PropTypes.func
};

export default withRouter(Tafuta);