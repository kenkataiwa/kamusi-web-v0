import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mwanzo from "./components/Mwanzo";
import Kuhusu from "./components/kurasa/Kuhusu";
import Haipatikani from "./components/kurasa/Haipatikani";
import "./assets/css/app.min.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mwanzo} />
          <Route exact path="/kuhusu" component={Kuhusu} />
          <Route path="*" component={Haipatikani} />
        </Switch>
      </BrowserRouter>
    );
  }
}
