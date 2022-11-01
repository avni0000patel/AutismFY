import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "avni0000patel1",
      imageURL: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png",
      caption: "Wow it works!",
    },
    {
      username: "avni0000patel2",
      imageURL: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png",
      caption: "Wow it works!!",
    },
  ]);
  return (
    <div className="App">
      <div class="app__header">
        <h1>AutismFY</h1>
      </div>
      <div className="timeline">
        {
          posts.map((post) => (
            <Post
              username={post.username}
              caption={post.caption}
              imageURL={post.imageURL}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
