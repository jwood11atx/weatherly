import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";


const Main = React.createClass ({
  fetchWeather(){
    //get value from input field
    //get filted api with value from input field
    //iterate and produce ul/li items to put on page
    const city = this.refs.inputField.value;
    $.get(`http://weatherly-api.herokuapp.com/api/weather/${city}`, this.handleResponse)
  },

  handleResponse(response) {
    console.log('SUCCESS', response);
  },

  render() {
    return(
      <section className="input-field-container">
        <input type="input" placeholder="Enter City" ref="inputField"/>
        <button type="submit" onClick={this.fetchWeather}>Submit</button>
      </section>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
