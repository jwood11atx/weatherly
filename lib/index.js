import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import { HourlySection } from "./HourlySection";
import { WeatherSection } from "./WeatherSection";
require('./reset.scss');
require('./styles.scss');

window.addEventListener("load", function(){
  let lastInputText = JSON.parse(localStorage.getItem("city"));
  document.getElementById("input-field").value = lastInputText;
  document.getElementById("submit-button").click();
})

const Main = React.createClass ({
  getInitialState() {
    return { cityWeather: [], hourlyWeather: [], currentDay: null}
  },

  fetchWeather(){
    const city = this.refs.inputField.value.toLowerCase();
    if(city === "denver" || city === "san-diego" || city === "castle-rock" || city === "san-fransico") {
    window.localStorage.setItem("city", JSON.stringify(city));
    $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse);
    document.getElementById("input-field").value = "";
    document.getElementById("title").innerHTML = `weatherly ${city}`;
    } else {
      document.getElementById("title").innerHTML = `please enter a yung city`;
    }
  },

  handleResponse(results) {
    this.setState({ cityWeather: results })
  },

  getHourlyWeather(hourlyData, dailyWeather) {
    let dataArray = [];
    hourlyData.timeBreakDown.map((e, index) => {
      return(
        dataArray.push(<h1 key={index} >{e[`hour${index+1}`]}</h1>),
        this.setState({ hourlyWeather: dataArray, currentDay: dailyWeather.date })
      )
    })
  },

  render() {
    return(
      <section className="input-field-container">
        <input id="input-field" type="input" placeholder="Enter City" ref="inputField"/>
        <button id="submit-button" type="submit" onClick={this.fetchWeather}>Submit</button>
        <WeatherSection cityWeather={this.state.cityWeather} getHourlyWeather={this.getHourlyWeather}/>
        <HourlySection hourlyWeather={this.state.hourlyWeather} currentDay={this.state.currentDay}/>
      </section>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
