import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";
require('./styles/reset.scss');
require('./styles/styles.scss');

window.addEventListener("load", function(){
  let lastInputText = JSON.parse(localStorage.getItem("city"));
  document.getElementById("input-field").value = lastInputText;
  document.getElementById("submit-button").click();
})


ReactDOM.render(<Main />, document.querySelector(".application"));
