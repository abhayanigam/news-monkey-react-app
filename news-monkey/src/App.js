import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

//React component based class
export default class App extends Component {
  // render method renders series of methods , it also responsible to render
  // jsx to html render
  render() {
    // return <>Hello my first class based component {this.c}</>;
    return (
      <>
        <NavBar />
        <News />
      </>
    );
  }
}
