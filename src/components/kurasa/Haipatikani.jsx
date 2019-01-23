import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Haipatikani extends Component {
  state = {
    redirect: true
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/kuhusu" />;
    }
  };
  render() {
    return (
      <div className="container">
        {this.renderRedirect()}
        <div className="not-found">
          <p>Kurasa unayotafuta haipo, tafadhali wasiliana nasi kama kuna tatizo.</p>
        </div>
      </div>
    );
  }
}
