import React, { Component } from "react";
import "./App.css";
import WeatherList from "./components/WeatherList";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div>
        <WeatherList />
      </div>
    );
  }
}

export default App;
