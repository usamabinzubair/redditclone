import React, { Component } from 'react';
import './Posts.css';
import { TiArrowUpThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";



export class Posts extends Component {


    render() {
        return (
            <div>
                <div className = "posts">
                    <div className = "upvotes"><TiArrowUpThick/>100<TiArrowDownThick/></div>

                    <div className = "postMain">
                        <div className = "subredditBar">sub name, username, time</div>
                        <div className = "title">main header</div>
                        <div className = "content">images, links, text info</div>
                        <div className = "commentBar">comments, share, save, hide, report</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts
