import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Mwanzo from "./components/Mwanzo";
import Tafuta from "./components/tafuta/Tafuta";
import ManenoRoute from "./components/maneno/ManenoRoute";
import NahauRoute from "./components/nahau/NahauRoute";
import Kuhusu from "./components/kurasa/Kuhusu";
import Haipatikani from "./components/kurasa/Haipatikani";
import "./assets/css/app.min.css";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Mwanzo}/>
                    <Route exact path="/kuhusu" component={Kuhusu}/>
                    <Route path="/tafuta" component={Tafuta}/>
                    <Route path="/neno" component={ManenoRoute}/>
                    <Route path="/maneno" component={ManenoRoute}/>
                    <Route path="/nahau" component={NahauRoute}/>
                    <Route path="*" component={Haipatikani}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
