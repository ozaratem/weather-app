import React from "react";
import CityInfo from "../CityInfo";
import WetherSetInfo from "../WeatherSetInfo/";
import Loader from "../Loader";
import "./styles.css";

export default class WeatherList extends React.Component {
  // State inicial
  state = {
    loading: true,
    weather: null,
    city: null,
    selectedWeather: null,
  };

  // Did Mount action
  // Run after first render
  async componentDidMount() {
    // async request
    const request = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?id=3623486&mode=json&units=metric&appid=fdedcbb70a2fb6a9f6ff81929d1316d6"
    ).then((res) => res.json());

    // Data selection & transformation
    const weatherFromRequest = request.list.map((wSet) => {
      const cleanWSet = {
        date: wSet.dt_txt,
        weather: wSet.weather[0],
        temperature: wSet.main,
      };
      return cleanWSet;
    });

    // Date Format

    // prepared update for next state
    const update = {
      city: request.city,
      loading: false,
      weather: weatherFromRequest,
    };

    // set of new state
    this.setState(update);
  }

  render() {
    return (
      <div className="city-container">
        {this.state.city && <CityInfo city={this.state.city} />}

        {this.state.loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>
            <h3>Weather list</h3>
            <div className="weather-container">
              {this.state.weather.map((set) => {
                return <WetherSetInfo key={set.date} set={set} />;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
