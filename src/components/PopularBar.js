import React, { Component } from "react";
import { IoIosFlame } from "react-icons/io";
import { GiSevenPointedStar } from "react-icons/gi";
import { FiBarChart2 } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import "./PopularBar.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export class PopularBar extends Component {
  state = {
    menu: "",
    showMenu: false
  };

  onClick = e => {
    e.preventDefault();
    this.setState({
      showMenu: this.state.showMenu === false ? true : false
    });
  };
  render() {
    return (
      <div>
        <div className="popBtns">
          <button className="hot">
            <IoIosFlame /> Hot
          </button>
          <button className="new">
            <GiSevenPointedStar /> New
          </button>
          <button className="top">
            <FiBarChart2 /> Top
          </button>
          <button className="rising">
            <MdShowChart /> Rising
          </button>
        </div>
        <div className = "bigdivwrap">
        <div className = "bigdiv">
        <button className="mpopdropdown" onTouchStart={this.onClick}>
        <IoIosFlame /> Hot <IoIosArrowDown />
            </button>
        <a href = "#"> Log in / Register </a>
           
        </div>
        </div>
        <div
          className="mpopbar"
          style={{ display: this.state.showMenu ? "block" : "none" }}
          id="dd-list"
        >
          <ul>
            <li className="smallheading">Sort Posts By:</li>
            <li className="bigheading"> <IoIosFlame className = "micons"/>  Hot</li>
            <li className="bigheading"><FiBarChart2 className = "micons"/>  Top</li>
            <li className="bigheading"><GiSevenPointedStar className = "micons"/>  New</li>
            <li className="bigheading"><AiFillThunderbolt className = "micons"/>  Controversial</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PopularBar;
