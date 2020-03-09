import React from 'react';
import './SideBar.css';
import { GiCheckedShield } from "react-icons/gi";
import { IoMdArrowDropup } from "react-icons/io"; 
import planet from "./images/planet.png";
import salami from "./images/salami.png";
import  man from "./images/man.png";
import  corona from "./images/corona.png";
import  cmv from "./images/cmv.png";


const SideBar = () => {
    return(
        <div className = "allSidebars">
            <div className = "top5">
            <div className = "headerimg">
                <p>Today's Top Growing Communities</p>
                </div>
                <ul>
                    <li>1 <IoMdArrowDropup className = "arrowtop"/><img className = "topcomimg" src ={corona} />r/Coronavirus</li>
                    <li>2 <IoMdArrowDropup className = "arrowtop"/><img className = "topcomimg" src = {planet} />r/relationship_advice</li>
                    <li>3 <IoMdArrowDropup className = "arrowtop"/><img className = "topcomimg" src= {salami} />r/politics</li>
                    <li>4 <IoMdArrowDropup className = "arrowtop"/><img className = "topcomimg" src= {man} />r/PresidentialRaceMemes</li>
                    <li>5 <IoMdArrowDropup className = "arrowtop"/><img className = "topcomimg" src= {cmv} />r/changemyview </li>
                </ul>
                <button className = "viewall">VIEW ALL</button>
​
                    <div className = "bottomBtns">
                        <button>Sports</button>
                        <button>Gaming</button>
                        <button>News</button>
                        <button>Aww</button>
                    </div>
​
            </div>
            
            <div className = "premium">
                <GiCheckedShield className = "shield"/>
                <div className = "premiumtext">
                <p className = "heading">Reddit Premium</p>
                <p>The best Reddit experience, with monthly Coins</p>
                </div>
                <button>TRY NOW</button>
            </div>
​
            <div className = "trendComms">
                <p>Trending Communities</p>
                <div className = "trendwrap">
            <div className = "ultrend">
                <ul>
                    <li><img className = "topcomimg" src = {planet} /> <div className = "trendtitles"><li>r/dechonkers</li><li>58.3k members</li></div>
                    
                    </li>
                    <li><img className = "topcomimg" src = {planet}/><div className = "trendtitles"><li>r/DadForAMinute</li><li>12.5k members</li></div>
                    
                    </li>
                    <li><img className = "topcomimg" src = {planet}/><div className = "trendtitles"><li>r/ironicsigns</li><li>34.3k members</li></div>
                    
                    </li>
                    <li><img className = "topcomimg" src = {planet}/><div className = "trendtitles"><li>r/dogswitheyebrows</li><li>20.8k members</li></div>
                    
                    </li>
                    <li><img className = "topcomimg" src = {planet}/><div className = "trendtitles"><li>r/EveryLittleAnimation</li><li>2.2k members</li></div>
                    
                    </li>
                </ul>
                </div>
                <div className = "ulbuttons">
                <button className = "join">JOIN</button>
                <button className = "join">JOIN</button>
                <button className = "join">JOIN</button>
                <button className = "join">JOIN</button>
                <button className = "join">JOIN</button>
                </div>
            </div>
            </div>
​
            <div className = "popComms">
                <div className = "topRandom">
                    <a href ="#">AskReddit</a>
                    <a href ="#">NoStupidQuestions</a>
                    <a href ="#">DestinyTheGame</a>
                    <a href ="#">explainlikeimfive</a>
                    <a href ="#">AskMen</a>
                    <a href ="#">leagueoflegends</a>
                    <a href ="#">Minecraft</a>
                </div>
                <div className = "dropdownlists">
                    <p>GAMING</p>
                    <p>SPORTS</p>
                    <p>TV</p>
                    <p>TRAVEL</p>
                    <p>HEALTH & FITNESS</p>
                    <p>FASHION</p>
                </div>
            </div>
​
            <div className = "help">
                <div className = "listLeft">
                    <a href ="#">Help</a>
                    <a href ="#">Reddit App</a>
                    <a href ="#">Reddit Coins</a>
                    <a href ="#">Reddit Premium</a>
                    <a href ="#">Reddit Gifts</a>
                    <a href ="#">Communities</a>
                    <a href ="#">Top Posts</a>
                    <a href ="#">Topics</a>
                </div>
                <div className = "listRight">
                    <a href ="#">About</a>
                    <a href ="#">Careers</a>
                    <a href ="#">Press</a>
                    <a href ="#">Advertise</a>
                    <a href ="#">Blog</a>
                    <a href ="#">Terms</a>
                    <a href ="#">Content Policy</a>
                    <a href ="#">Privacy Policy</a>
                    <a href ="#">Mod Policy</a>
                </div>
            <p>Reddit Inc © 2020. All rights reserved</p>
            </div>
        <button>BACK TO TOP</button>
        </div>
    )
}

export default SideBar


