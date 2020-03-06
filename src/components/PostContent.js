import React, { Component } from "react";
import "./PostContent.css";
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { MdChatBubble } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { AiFillFileAdd } from "react-icons/ai";
import { MdBlock } from "react-icons/md";
import { MdFlag } from "react-icons/md";

const PostContent = props => {
  return (
    <div>
      <div className="desktopContent">
        <div className="allContent">
          <div className="upvotes">
            <TiArrowUpThick />
            {props.votes}
            <TiArrowDownThick />
          </div>

          <div className="postcontent">
            <div className="subredditBar">
              {" "}
              <img src={props.subimage} />{" "}
              <p className="propsub"> {props.subname} </p>{" "}
              <p className="propuser">
                {" "}
                Posted By {props.username} {props.time}
              </p>{" "}
            </div>
            <div className="title">{props.headline}</div>
            <div className="content">{props.content}</div>
            <div className="commentBar">
              <button>
                {" "}
                <MdChatBubble /> Comment{" "}
              </button>
              <button>
                {" "}
                <IoIosShareAlt /> Share
              </button>
              <button>
                {" "}
                <AiFillFileAdd /> Save
              </button>
              <button>
                {" "}
                <MdBlock /> Hide
              </button>
              <button>
                <MdFlag /> Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mobileContent">
        <div className="allContent">
        

          <div className="postcontent">
            <div className="subredditBar">
              {" "}
              <img src={props.subimage} />{" "}
              <p className="propsub"> {props.subname} </p>{" "}
              <p className="propuser">
                {" "}
                Posted By {props.username} {props.time}
              </p>{" "}
            </div>
            <div className = "mainmobilecontent">
            <div className="title">{props.headline}</div>
            <div className="content">{props.content}</div>
            </div>
            <div className = "mainCommentBar">
            <div className="commentBar">
            <button>
                {" "}
                <IoIosShareAlt /> Share
              </button>
              <button>
                {" "}
                <MdChatBubble /> Comment{" "}
              </button>
              </div>
              <div className="upvotes">
            <TiArrowUpThick />
            {props.votes}
            <TiArrowDownThick />
          </div>
          </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PostContent;
