import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PopularBar from "./components/PopularBar"
import Posts from "./components/Posts"

export class App extends Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <Navbar />
        </div>

        <div className="trendingbox"><p>Trending</p></div>

        <div className="App">
         
          <div className = "leftWrap">
            <div className="popularbox"><p><PopularBar /></p></div>

            <div className="postbox"><p><Posts /></p></div>
          </div>
          <div className="sidebar"><p>side</p></div>
        </div>
      </div>
    );
  }
}

export default App;
