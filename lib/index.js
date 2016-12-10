import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

// const nameMap = {
//   denver: "denver",
//   san-fransisco: "lol"
// }

const Main = React.createClass ({
  getInitialState() {
    return { cityWeather: [] }
  },

  fetchWeather(){
    //get value from input field
    //get filted api with value from input field
    //iterate and produce ul/li items to put on page
    const city = this.refs.inputField.value.toLowerCase();
    $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse)
  },

  handleResponse(results) {
    // console.log('SUCCESS', results);
    this.setState({ cityWeather: results })
    // ierate and create cards
    // set thoae cars as state
  },

  createCards(dailyWeather, index) {
    return(
      <li key={index} >
        <h3>Date: {dailyWeather.date}</h3>
        <p>High Temp: {dailyWeather.temp.high}</p>
        <p>Low Temp: {dailyWeather.temp.low}</p>
        {/* <button onClick={this.displayHourly.bind(null, dailyWeather.hourly)}>Hourly temp</button> */}
        <button onClick={this.displayHourly.bind(null, dailyWeather.hourly)}>Hourly Data</button>
      </li>
    )
  },

  displayHourly(hourlyData) {
    console.log('hourlyData:', hourlyData);

    // which day was clicked
    // go to the state and pull out the data for the date that was clicked

  },

  // displayCards() {
  //   console.log('hello');
  // },

  render() {
    console.log(this.state);
    const cards = this.state.cityWeather.map(this.createCards)
    return(
      <section className="input-field-container">
        <input type="input" placeholder="Enter City" ref="inputField"/>
        <button type="submit" onClick={this.fetchWeather}>Submit</button>
        <ul>{cards}</ul>
      </section>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
