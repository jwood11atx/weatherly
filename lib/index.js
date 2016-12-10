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
    // $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse)
    $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse)

  },

  handleResponse(results) {
    // console.log('SUCCESS', results);
    this.setState({ cityWeather: results })
    // ierate and create cards
    // set thoae cars as state
  },

  displayWeatherSection(dailyWeather, index) {
    return(
      <li key={index} >
        <h3>Date: {dailyWeather.date}</h3>
        <p>High Temp: {dailyWeather.temp.high}</p>
        <p>Low Temp: {dailyWeather.temp.low}</p>
        <button onClick={this.displayHourly.bind(null, dailyWeather.hourly)}>Hourly Data</button>
      </li>
    )
  },

  displayHourly(hourlyData) {
    let dataArray = [];
    hourlyData.timeBreakDown.map((e, index) => {
      // console.log(`hour${index}`);
      // console.log(e[`hour${index+1}`]);
      return(
        // console.log(e[`hour${index+1}`].temp),
        dataArray.push(<h1 key={index} >{e[`hour${index+1}`].temp}</h1>)
        // <section key={index} >
        //   <article>{index}:00</article>
        //   <article>{hourlyData.temp}</article>
        //   <article>{hourlyData.type}</article>
        // </section>
        // console.log(dataArray)
      )
    })
    return (
      <h1>TESTESTSETSELTSETLKSAJETLKASJETAT</h1>
    )
  },

  // displayCards() {
  //   console.log('hello');
  // },

  render() {
    const cards = this.state.cityWeather.map(this.displayWeatherSection)
    return(
      <section className="input-field-container">
        <input type="input" placeholder="Enter City" ref="inputField"/>
        <button type="submit" onClick={this.fetchWeather}>Submit</button>
        <ul>{cards}</ul>
        <article className="hourly-section">{this.displayHourly}</article>
      </section>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
