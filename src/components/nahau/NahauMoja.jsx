import React, { Component } from "react";
import PropTypes from "prop-types";

class NahauMoja extends Component {
  addToCart = () => {
    console.log(this.props);
  };
  getStyle = () => {
    if (this.props.nahauMoja.isNew) {
      return {
        // backgroundColor: "#f4f4aa"
      };
    }

    return {
      // backgroundColor: "#f4f4f4"
    };
  };
  render() {
    const { id, name, url, imageUrl } = this.props.nahauMoja;
    return (
      <div className="product col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
        <a href={url} className="product-link">
          <img className="product-img" alt="" />
        </a>
        <p data-product-id={id} className="product-name">
          {name}
        </p>
      </div>
    );
  }
}
// PropTypes
NahauMoja.propTypes = {
  nahauMoja: PropTypes.object.isRequired
};

export default NahauMoja;
