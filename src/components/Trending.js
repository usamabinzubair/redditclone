import React, { Component } from "react";
import "./Trending.css";

const Trending = props => {
  return (
      <div>
    <p className = "trendingToday">Trending Today</p>
    <div className="alltrendContent">
      <div className="trendingContent1">
        <div className="content">
          <h2>Dortmund</h2>
          <div className="subtext">
            <p>PSG - Dortmund might be played behind closed ...</p>
          </div>
          <div className="subreddit">
            <div className="subimage">
              <img src="https://derivates.kicker.de/image/upload/x_125,y_11,w_2662,h_1497,c_crop/w_1000,h_563,q_auto/izr7awbkooz3osls6wmo.jpg" />
            </div>
            <p>r/soccer and more</p>
          </div>
        </div>
      </div>

      <div className="trendingContent2">
        <div className="content">
          <h2>Women's day</h2>
          <div className="subtext">
            <p>Islamists hurl stones and shoes at Women's Day marchers...</p>
          </div>
          <div className="subreddit">
            <div className="subimage">
              <img src="https://i.dawn.com/primary/2020/03/5e5fd199ccf2f.jpg" />
            </div>
            <p>r/news and more</p>
          </div>
        </div>
      </div>

      <div className="trendingContent3">
        <div className="content">
          <h2>Dortmund</h2>
          <div className="subtext">
            <p>PSG - Dortmund might be played behind closed ...</p>
          </div>
          <div className="subreddit">
            <div className="subimage">
              <img src="https://derivates.kicker.de/image/upload/x_125,y_11,w_2662,h_1497,c_crop/w_1000,h_563,q_auto/izr7awbkooz3osls6wmo.jpg" />
            </div>
            <p>r/soccer and more</p>
          </div>
        </div>
      </div>

      <div className="trendingContent4">
        <div className="content">
          <h2>Dortmund</h2>
          <div className="subtext">
            <p>PSG - Dortmund might be played behind closed ...</p>
          </div>
          <div className="subreddit">
            <div className="subimage">
              <img src="https://derivates.kicker.de/image/upload/x_125,y_11,w_2662,h_1497,c_crop/w_1000,h_563,q_auto/izr7awbkooz3osls6wmo.jpg" />
            </div>
            <p>r/soccer and more</p>
          </div>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Trending;
