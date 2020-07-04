import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/post/?format=json")
      .then(res => res.json())
      .then(data => this.setState({ posts: data.results }))
  }

  render() {
    return (
      <div align="center">
        <h1 align="center"><header>All posts</header></h1>
        <ul>
          {this.state.posts.map(post => (
            <li>
              <p>
                BoastOrRoast - {post.boast_or_roast} <br />
                Post - {post.body} <br />
                Likes - {post.upvotes} <br />
                Dislikes - {post.downvotes} <br />
                Score - {post.score}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
};

export default App;
