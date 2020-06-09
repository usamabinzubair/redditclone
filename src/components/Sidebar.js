import React from "react";
import "./SideBar.css";
import { GiCheckedShield } from "react-icons/gi";
import { IoMdArrowDropup } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import planet from "./images/planet.png";
import salami from "./images/salami.png";
import man from "./images/man.png";
import corona from "./images/corona.png";
import cmv from "./images/cmv.png";

const SideBar = () => {
  return (
    <div className="allSidebars">
      <div className="top5">
        <div className="headerimg">
          <p>Today's Top Growing Communities</p>
        </div>
        <ul>
          <li>
            1 <IoMdArrowDropup className="arrowtop" />
            <img className="topcomimg" src={corona} />
            r/Coronavirus
          </li>
          <li>
            2 <IoMdArrowDropup className="arrowtop" />
            <img className="topcomimg" src={planet} />
            r/relationship_advice
          </li>
          <li>
            3 <IoMdArrowDropup className="arrowtop" />
            <img className="topcomimg" src={salami} />
            r/politics
          </li>
          <li>
            4 <IoMdArrowDropup className="arrowtop" />
            <img className="topcomimg" src={man} />
            r/PresidentialRaceMemes
          </li>
          <li>
            5 <IoMdArrowDropup className="arrowtop" />
            <img className="topcomimg" src={cmv} />
            r/changemyview{" "}
          </li>
        </ul>
        <button className="viewall">VIEW ALL</button>​
        <div className="bottomBtns">
          <button>Sports</button>
          <button>Gaming</button>
          <button>News</button>
          <button>Aww</button>
        </div>
        ​
      </div>
      <div className="premium">
        <GiCheckedShield className="shield" />
        <div className="premiumtext">
          <p className="heading">Reddit Premium</p>
          <p>The best Reddit experience, with monthly Coins</p>
        </div>
        <button>TRY NOW</button>
      </div>
      ​
      <div className="trendComms">
        <p>Trending Communities</p>
        <div className="trendwrap">
          <div className="ultrend">
            <ul>
              <li>
                <img className="topcomimg" src={planet} />{" "}
                <div className="trendtitles">
                  <li>r/dechonkers</li>
                  <li>58.3k members</li>
                </div>
              </li>
              <li>
                <img className="topcomimg" src={planet} />
                <div className="trendtitles">
                  <li>r/DadForAMinute</li>
                  <li>12.5k members</li>
                </div>
              </li>
              <li>
                <img className="topcomimg" src={planet} />
                <div className="trendtitles">
                  <li>r/ironicsigns</li>
                  <li>34.3k members</li>
                </div>
              </li>
              <li>
                <img className="topcomimg" src={planet} />
                <div className="trendtitles">
                  <li>r/dogswitheyebrows</li>
                  <li>20.8k members</li>
                </div>
              </li>
              <li>
                <img className="topcomimg" src={planet} />
                <div className="trendtitles">
                  <li>r/EveryLittleAnimation</li>
                  <li>2.2k members</li>
                </div>
              </li>
            </ul>
          </div>
          <div className="ulbuttons">
            <button className="join">JOIN</button>
            <button className="join">JOIN</button>
            <button className="join">JOIN</button>
            <button className="join">JOIN</button>
            <button className="join">JOIN</button>
          </div>
        </div>
      </div>
      ​
      <div className="popComms">
        <button className = "popcomsheader">POPULAR COMMUNITIES <IoIosArrowUp /></button>
        <div className="topRandom">
          <div className = "topline1">
          <a href="#">AskReddit</a>
          <a href="#">NoStupidQuestions</a>
          </div>
          <div className = "topline2">
          <a href="#">DestinyTheGame</a>
          <a href="#">explainlikeimfive</a>
          </div>
          <div className = "topline3">
          <a href="#">AskMen</a>
          <a href="#">leagueoflegends</a>
          <a href="#">Minecraft</a>
          </div>
        </div>
        <div className="dropdownlists">
        <button className = "popcombuttons">GAMING <IoIosArrowDown /></button>
        <button className = "popcombuttons">SPORTS <IoIosArrowDown /></button>
        <button className = "popcombuttons">TV <IoIosArrowDown /></button>
        <button className = "popcombuttons">TRAVEL <IoIosArrowDown /></button>
        <button className = "popcombuttons">HEALTH & FITNESS <IoIosArrowDown /></button>
        <button className = "popcombuttons">FASHION <IoIosArrowDown /></button>
        </div>
      </div>
      ​
      <div className="help">
      <div className = "listWrapper">
        <div className="listLeft">
        <ul>
          <li><a href="#">Help</a> </li>
          <li><a href="#">Reddit App</a></li>
          <li><a href="#">Reddit Coins</a></li>
          <li><a href="#">Reddit Premium</a></li>
          <li><a href="#">Reddit Gifts</a></li>
          <li><a href="#">Communities</a></li>
          <li><a href="#">Top Posts</a></li>
          <li><a href="#">Topics</a></li>
        </ul>
        </div>
        <div className="listRight">
          <li><a href="#">Careers</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Advertise</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Content Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Mod Policy</a></li>
        </div>
        </div>
        <p className = "copyright">Reddit Inc © 2020. All rights reserved</p>
      </div>
      <div className = "buttonWrapper">
        <button className = "backToTop">BACK TO TOP</button>
      </div>
    </div>
  );
};

export default SideBar;
