import React from "react";

export default class FetchWeather extends React.Component {
  state = {
    loading: true,
    weather: null,
  };

  async componentDidMount() {
    const url =
      "http://api.openweathermap.org/data/2.5/forecast?id=3623484&mode=json&appid=fdedcbb70a2fb6a9f6ff81929d1316d6";
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div> loading ... </div>
        ) : (
          <div> Weather ... </div>
        )}
      </div>
    );
  }
}
