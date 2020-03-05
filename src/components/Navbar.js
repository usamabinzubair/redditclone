import "./Navbar.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "./images/redditlogo.png";
import text from "./images/reddittext.png";
import { IoIosChatbubbles } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { GiCheckedShield } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

export class Navbar extends Component {
  state = {
    menu: "",
    showMenu: false
  };

  // handleChange = (e) => {
  //   this.setState ({
  //     menu: e.target.value
  //   })
  // }

  onClick = e => {
    e.preventDefault();
    this.setState({
      showMenu: this.state.showMenu === false ? true : false
    });
  };

  render() {
    return (
      <div className="navbar">
        <nav className="desktopnav">
          <div className="images">
            <img src={logo} alt="" width="32px" />
            <img className="reddittext" src={text} alt="" width="57px" />
          </div>

          <div className="searchbar">
            <FaSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="buttons">
            <button className="login">Log In</button>
            <button className="signup">Sign Up</button>
            <button className="dropdown" onClick={this.onClick}>
              <MdPerson class="md" />
              <MdKeyboardArrowDown class="md" />
            </button>
            <div
              className="dd-list"
              style={{ display: this.state.showMenu ? "block" : "none" }}
              id="dd-list"
            >
              <ul>
                <li className="smallheading">View Options</li>
                <li className="bigheading">
                  {" "}
                  <FaMoon className = "menuicon"/> Night Mode
                </li>
                <li className="smallheading">More Stuff</li>
                <li className="bigheading">
                  <AiFillCopyrightCircle className = "menuicon" /> Reddit Coins
                </li>
                <li className="bigheading">
                  <GiCheckedShield className = "menuicon"/> Reddit Premium
                </li>
                <li className="bigheading">
                  <FaRegQuestionCircle className = "menuicon"/> Help Center
                </li>
                <li className="logsign">
                  <GiExitDoor className = "menuicon"/>
                  Log In/Sign Up
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="mobilenav">
          <div className="images">
            <img src={logo} alt="" width="32px" />
            <img className="reddittext" src={text} alt="" width="57px" />
            <button className="marrow">
              <IoIosArrowDropdown />
            </button>
          </div>
          <div className="mobileBtn">
            <button className="useapp">Use App</button>
            <button className="chat">
              <IoIosChatbubbles />
            </button>
            <button className="search">
              <FaSearch />
            </button>
            <button className="mdropdown" onTouchStart={this.onClick}>
              <GiHamburgerMenu />

            </button>
            <div
              className="dd-list"
              style={{ display: this.state.showMenu ? "block" : "none" }}
              id="dd-list"
            >
              <ul>
                <li className="smallheading">View Options</li>
                <li className="bigheading">
                  {" "}
                  <FaMoon className = "menuicon"/> Night Mode
                </li>
                <li className="smallheading">More Stuff</li>
                <li className="bigheading">
                  <AiFillCopyrightCircle className = "menuicon" /> Reddit Coins
                </li>
                <li className="bigheading">
                  <GiCheckedShield className = "menuicon"/> Reddit Premium
                </li>
                <li className="bigheading">
                  <FaRegQuestionCircle className = "menuicon"/> Help Center
                </li>
                <li className="logsign">
                  <GiExitDoor className = "menuicon"/>
                  Log In/Sign Up
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
