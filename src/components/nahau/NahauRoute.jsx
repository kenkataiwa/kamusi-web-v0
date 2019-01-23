import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Nahau from "./Nahau";
import NahauMoja from "./NahauMoja";

class NahauRoute extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/nahau' component={Nahau}/>
                <Route path='/nahau/:id' component={NahauMoja}/>
            </Switch>
        );
    }
}

export default NahauRoute;
