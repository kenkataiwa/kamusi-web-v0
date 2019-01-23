import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import Maneno from "./Maneno";
import NenoMoja from "./NenoMoja";

class ManenoRoute extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/maneno' component={Maneno}/>
                <Route exact path='/neno' component={Maneno}/>
                <Route path='/maneno/:id' component={NenoMoja}/>
                <Route path='/neno/:id' component={NenoMoja}/>
            </Switch>
        );
    }
}
export default ManenoRoute;
