import React, { Component } from "react";
import { WiCloudy, WiRain } from "react-icons/wi";
import "./styles.css";

class WeatherSetInfo extends Component {
  weatherSwitch(weather) {
    switch (weather) {
      case "Rain":
        return <WiRain />;
      case "Clouds":
        return <WiCloudy />;
      default:
        return null;
    }
  }

  //OnClic function goes here
  wInfo() {
    const { date, temperature, weather } = this.props.set;
    alert(weather.description);
  }

  render() {
    const { date, temperature, weather } = this.props.set;
    return (
      <div className="weather-set" onClick={() => this.wInfo()}>
        <p>{date}</p>
        <p>{temperature.temp}&#8451;</p>
        <i>{this.weatherSwitch(weather.main)}</i>
      </div>
    );
  }
}

export default WeatherSetInfo;
