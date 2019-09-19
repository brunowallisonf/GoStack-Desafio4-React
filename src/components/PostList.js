import React, { Component } from "react";
import Post from "./Post";
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Bruno Fernandes",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Bruno Fernandes",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul className="postlist">
        {this.state.posts.map(post => (
          <Post post={post} key={post.id}></Post>
        ))}
      </ul>
    );
  }
}

export default PostList;
