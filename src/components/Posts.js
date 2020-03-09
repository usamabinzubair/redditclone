import React, { Component } from 'react';
import './Posts.css';
import PostContent from "./PostContent"
import cat from "./images/cat.jpg";



export class Posts extends Component {

    state = {
        postContent: [
      
          { 
            votes: 100,
            subimage: cat,
            subname: "r/Aww",
            username: "u/Gjsfs",
            time: "12 hours ago",
            headline: "I'm really in love, look at those crossed paws.",
            content: <img src = "https://i.redd.it/upd4trh6dzk41.jpg"/>
      
          },

          { 
            votes: 100,
            subimage: cat,
            subname: "r/Aww",
            username: "u/SjdhD",
            time: "12 hours ago",
            headline: "I'm really in love, look at those crossed paws.",
            content: <img src = "https://i.redd.it/upd4trh6dzk41.jpg"/>
      
          },
          { 
            votes: 100,
            subimage: cat,
            subname: "r/Aww",
            username: "u/Gjsfs",
            time: "12 hours ago",
            headline: "I'm really in love, look at those crossed paws.",
            content: <img src = "https://i.redd.it/upd4trh6dzk41.jpg"/>
      
          },
          { 
            votes: 100,
            subimage: cat,
            subname: "r/Aww",
            username: "u/Gjsfs",
            time: "12 hours ago",
            headline: "I'm really in love, look at those crossed paws.",
            content: <img src = "https://i.redd.it/upd4trh6dzk41.jpg"/>
      
          },
          { 
            votes: 100,
            subimage: cat,
            subname: "r/Aww",
            username: "u/Gjsfs",
            time: "12 hours ago",
            headline: "I'm really in love, look at those crossed paws.",
            content: <img src = "https://i.redd.it/upd4trh6dzk41.jpg"/>
      
          },

        ]
        }

    render() {
        const eachPost = this.state.postContent.map((postContent, index) => {
            return (
              <PostContent votes = {postContent.votes} subimage = {postContent.subimage} subname = {postContent.subname} username={postContent.username} time = {postContent.time} headline = {postContent.headline} content = {postContent.content}    key={index}/>
            );
          });
        return (
            <div className = "main">
                <div className = "posts">

                    <div className = "postMain">
                        {eachPost}
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts 
