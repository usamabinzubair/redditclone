import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PopularBar from "./components/PopularBar"
import Posts from "./components/Posts"
import Trending from "./components/Trending";
import SideBar from "./components/SideBar";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <Navbar />
        </div>

        <div className="trendingbox"><Trending/></div>

        <div className="App">
         
          <div className = "leftWrap">
            <div className="popularbox"><PopularBar /></div>

            <div className="postbox"><Posts /></div>
          </div>
          <div className="sidebar"><SideBar /></div>
        </div>
      </div>
    );
  }
}

export default App;
