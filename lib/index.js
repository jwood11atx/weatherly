import React, { Component } from "react";
import ReactDOM from "react-dom";


const Main = React.createClass ({
  render() {
    return(
      <h1>hello!</h1>
    )
  }
});


ReactDOM.render(<Main />, document.querySelector(".application"));
