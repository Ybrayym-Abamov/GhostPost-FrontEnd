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

  handleBoasts = (allPosts) => {
    this.setState({posts: allPosts.filter(
      boast => boast.boast_or_roast === 'Boast'
    )})
  }

  handleRoasts = (allPosts) => {
    this.setState({posts: allPosts.filter(
      roast => roast.boast_or_roast === 'Roast'
    )})
  }

  handleUpvotes = (allPosts) => {
    this.setState({posts: allPosts.sort(
      (post1, post2) => post2.score - post1.score
    )})
  }

  handleDownvotes = (allPosts) => {
    this.setState({posts: allPosts.sort(
      (post1, post2) => post1.score - post2.score
    )})
  }

  handleLikes = (id) => {
    fetch('http://127.0.0.1:8000/api/post/$(id)/upvotes/', {method: 'POST'})
    .then(res => res.json())
    .then(data => {
      window.location.reload()
    })
  };

  handleDislikes = (id) => {
    fetch('http://127.0.0.1:8000/api/post/$(id)/downvotes/', {method: 'POST'})
    .then(res => res.json())
    .then(data => {
      window.location.reload()
    })
  };

  render() {
    return (
      <div align="center">
        <h1 align="center"><header>All posts</header></h1>
        <button onClick={() => this.handleBoasts(this.state.posts)}>Boasts</button>
        <button onClick={() => this.handleRoasts(this.state.posts)}>Roasts</button>
        <button onClick={() => this.handleUpvotes(this.state.posts)}>Upvotes</button>
        <button onClick={() => this.handleDownvotes(this.state.posts)}>Downvotes</button>
        <ul>
          {this.state.posts.map(post => (
            <li>
              <p>
                BoastOrRoast - {post.boast_or_roast} <br />
                Post - {post.body} <br />
                Likes - {post.upvotes} <br />
                Dislikes - {post.downvotes} <br />
                Score - {post.score} <br />
              <button onClick={() => this.handleLikes(post.id)}>Like</button>
              <button onClick={() => this.handleDislikes(post.id)}>Dislike</button>
              </p>
            </li>
        ))}
        </ul>
      </div>
    );
  };
};

export default App;
