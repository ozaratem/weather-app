import React, { Component } from "react";
import "./App.css";
import FetchWeather from "./components/FetchWeather";

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div>
        <FetchWeather />
      </div>
    );
  }
}

export default App;
