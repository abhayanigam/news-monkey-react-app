import "./App.css";

import React, { Component } from "react";

//React component based class
export default class App extends Component {
  c = "Abhaya";
  render() {
    return <>Hello my first class based component {this.c}</>;
  }
}
