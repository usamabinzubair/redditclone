import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <Navbar />
        </div>
        <div className="App"></div>
      </div>
    );
  }
}

export default App;
