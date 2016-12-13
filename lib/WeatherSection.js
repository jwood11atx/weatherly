import React from "react";

export const WeatherSection = React.createClass({
  displayWeatherSection(dailyWeather, index) {
    return(
      <li key={index} >
        <h3 className="date">Date: {dailyWeather.date}</h3>
        <p className="high-temp">High Temp: {dailyWeather.temp.high}</p>
        <p className="low-temp">Low Temp: {dailyWeather.temp.low}</p>
        <p className="chance">Chance of Weather: {Math.floor(dailyWeather.weatherType.chance*100) + "%"}</p>
        <button onClick={this.props.getHourlyWeather.bind(null, dailyWeather.hourly, dailyWeather)}>Hourly Data</button>
      </li>
    )
  },

  render(){
    let displayArray = [];
    const cards = this.props.cityWeather.map((e, i)=>{
      if(i<7){
        displayArray.push(this.displayWeatherSection(e, i));
      }
    })
    return(
      <ul>{displayArray}</ul>
    )
  }
})
