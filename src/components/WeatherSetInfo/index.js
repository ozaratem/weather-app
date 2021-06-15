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

  // Alert OnClick Function

  // wInfo() {
  // const { date, temperature, weather } = this.props.set;
  // alert(weather.description);
  // }

  // selectedWeather function

  handleClic() {
    const { weather } = this.props.set;
    const updateSW = { selectedWeather: weather.main };
    this.setState(updateSW);
    alert(weather.description);
    console.log(updateSW);
  }

  render() {
    const { date, temperature, weather } = this.props.set;
    return (
      <div className="weather-set" onClick={() => this.handleClic()}>
        <p>{date}</p>
        <p>{temperature.temp}&#8451;</p>
        <i>{this.weatherSwitch(weather.main)}</i>
      </div>
    );
  }
}

export default WeatherSetInfo;
