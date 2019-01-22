import React, { Component } from "react";
import PropTypes from "prop-types";

class NenoSingle extends Component {
  addToCart = () => {
    console.log(this.props);
  };
  getStyle = () => {
    if (this.props.product.isNew) {
      return {
        // backgroundColor: "#f4f4aa"
      };
    }

    return {
      // backgroundColor: "#f4f4f4"
    };
  };
  render() {
    const { id, name, url, imageUrl } = this.props.neno;
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
NenoSingle.propTypes = {
  neno: PropTypes.object.isRequired
};

export default NenoSingle;
