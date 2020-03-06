import React, { Component } from "react";
import "./App.css";
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
            <div className="popularbox"><PopularBar /></div>

            <div className="postbox"><Posts /></div>
          </div>
          <div className="sidebar"><p>side</p></div>
        </div>
      </div>
    );
  }
}

export default App;
