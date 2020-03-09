import React from 'react';
import './SideBar.css';
import { GiCheckedShield } from "react-icons/gi";


const SideBar = () => {
    return(
        <div className = "allSidebars">
            <div className = "top5">
                <h2>Today's Top Growing Communities</h2>
                <ul>
                    <li>1 <img src="subimg" />r/Coronavirus</li>
                    <li>2 <img src="subimg" />r/relationship_advice</li>
                    <li>3 <img src="subimg" />r/politics</li>
                    <li>4 <img src="subimg" />r/PresidentialRaceMemes</li>
                    <li>5 <img src="subimg" />r/changemyview </li>
                </ul>
                <button>VIEW ALL</button>
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
                <GiCheckedShield />
                <p>Reddit Premium</p>
                <p>The best Reddit experience, with monthly Coins</p>
                <button>TRY NOW</button>
            </div>
​
            <div className = "trendComms">
                <h2>Trending Communities</h2>
                <ul>
                    <li><img src="subimg" />r/dechonkers <li>58.3k members</li>
                    <button>JOIN</button>
                    </li>
                    <li><img src="subimg"/>r/DadForAMinute<li>12.5k members</li>
                    <button>JOIN</button>
                    </li>
                    <li><img src="subimg"/>r/ironicsigns<li>34.3k members</li>
                    <button>JOIN</button>
                    </li>
                    <li>r<img src="subimg"/>/dogswitheyebrows<li>20.8k members</li>
                    <button>JOIN</button>
                    </li>
                    <li><img src="subimg"/>r/EveryLittleAnimation<li>2.2k members</li>
                    <button>JOIN</button>
                    </li>
                </ul>
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


