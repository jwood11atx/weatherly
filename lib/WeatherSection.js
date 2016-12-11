import React from "react";

export const WeatherSection = React.createClass({
  displayWeatherSection(dailyWeather, index) {
    return(
      <li key={index} >
        <h3>Date: {dailyWeather.date}</h3>
        <p>High Temp: {dailyWeather.temp.high}</p>
        <p>Low Temp: {dailyWeather.temp.low}</p>
        <button onClick={this.props.getHourlyWeather.bind(null, dailyWeather.hourly, dailyWeather)}>Hourly Data</button>
      </li>
    )
  },

  render(){
    const cards = this.props.cityWeather.map(this.displayWeatherSection)
    return(
      <ul>{cards}</ul>
    )
  }
})
