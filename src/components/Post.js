import React, { Component } from "react";
import profile from "../assets/profile.jpg";
import Comment from "./Comment";
class Post extends Component {
  render() {
    return (
      <li className="post">
        <div>
          <img src={profile} className="authorimg"></img>
          <p className="authorname">{this.props.post.author.name}</p>
          <p className="postdate">{this.props.post.date}</p>
          <p className="content">{this.props.post.content}</p>
        </div>
        <li className="divider"></li>
        <ul className="commentlist">
          {this.props.post.comments.map(comment => (
            <Comment comment={comment} key={comment.id}></Comment>
          ))}
        </ul>
      </li>
    );
  }
}

export default Post;
