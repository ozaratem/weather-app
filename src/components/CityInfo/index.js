import React, { Component } from "react";
import "./styles.css";

class CityInfo extends Component {
  render() {
    const { name, country } = this.props.city;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{country}</h3>
      </div>
    );
  }
}

export default CityInfo;
