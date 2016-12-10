import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const Main = React.createClass ({
  getInitialState() {
    return { cityWeather: [], hourlyWeather: [] }
  },

  fetchWeather(){
    const city = this.refs.inputField.value.toLowerCase();
    $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse)
  },

  handleResponse(results) {
    this.setState({ cityWeather: results })
  },

  displayWeatherSection(dailyWeather, index) {
    return(
      <li key={index} >
        <h3>Date: {dailyWeather.date}</h3>
        <p>High Temp: {dailyWeather.temp.high}</p>
        <p>Low Temp: {dailyWeather.temp.low}</p>
        <button onClick={this.getHourlyWeather.bind(null, dailyWeather.hourly)}>Hourly Data</button>
      </li>
    )
  },

  getHourlyWeather(hourlyData) {
    let dataArray = [];
    hourlyData.timeBreakDown.map((e, index) => {
      return(
        dataArray.push(<h1 key={index} >{e[`hour${index+1}`]}</h1>),

        this.setState({ hourlyWeather: dataArray})
      )
    })
  },

  displayHourlyWeatherSection() {
    let displaySection = [];
    this.state.hourlyWeather.map((e, index) => {

      return (displaySection.push(
        <ul key={index}>
          <h4>{index}:00</h4>
          <li>{e.props.children.temp}</li>
          <li>{e.props.children.type}</li>
        </ul>
      ))
    })
    return <section>{displaySection}</section>
  },

  render() {
    const cards = this.state.cityWeather.map(this.displayWeatherSection)
    return(
      <section className="input-field-container">
        <input type="input" placeholder="Enter City" ref="inputField"/>
        <button type="submit" onClick={this.fetchWeather}>Submit</button>
        <ul>{cards}</ul>
        <article className="hourly-section">{this.displayHourlyWeatherSection()}</article>
      </section>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
