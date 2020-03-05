import React, { Component } from 'react'
import { IoIosFlame } from "react-icons/io";
import { GiSevenPointedStar } from "react-icons/gi";
import { FiBarChart2 } from "react-icons/fi";
import { MdShowChart } from "react-icons/md";
import './PopularBar.css'

export class PopularBar extends Component {
    render() {
        return (
            <div className = "popBtns">

                <button className = "hot"><IoIosFlame /> Hot</button>
                <button className = "new"><GiSevenPointedStar /> New</button>
                <button className = "top"><FiBarChart2/> Top</button>
                <button className = "rising"><MdShowChart /> Rising</button>
            </div>
        )
    }
}

export default PopularBar

