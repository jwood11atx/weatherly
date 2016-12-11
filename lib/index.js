import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import {HourlySection} from "./HourlySection";

const Main = React.createClass ({
  getInitialState() {
    return { cityWeather: [], hourlyWeather: [], currentDay: null}
  },

  fetchWeather(){
    const city = this.refs.inputField.value.toLowerCase();
    $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse)
  },

  handleResponse(results) {
    this.setState({ cityWeather: results })
  },

  displayWeatherSection(dailyWeather, index) {
    console.log(HourlySection);
    return(
      <li key={index} >
        <h3>Date: {dailyWeather.date}</h3>
        <p>High Temp: {dailyWeather.temp.high}</p>
        <p>Low Temp: {dailyWeather.temp.low}</p>
        <button onClick={HourlySection.getHourlyWeather.bind(this, dailyWeather.hourly, dailyWeather)}>Hourly Data</button>
      </li>
    )
  },

  render() {
    const cards = this.state.cityWeather.map(this.displayWeatherSection)
    return(
      <section className="input-field-container">
        <input type="input" placeholder="Enter City" ref="inputField"/>
        <button type="submit" onClick={this.fetchWeather}>Submit</button>
        <ul>{cards}</ul>
        <HourlySection hourlyWeather={this.state.hourlyWeather} currentDay={this.state.currentDay}/>
      </section>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
