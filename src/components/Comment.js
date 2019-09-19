import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.comment.author.avatar}
          className="commentavatar"
        ></img>
        <div className="comment">
          <p className="commentauthor">{this.props.comment.author.name}</p>
          <p>{this.props.comment.content}</p>
        </div>
      </li>
    );
  }
}

export default Comment;
