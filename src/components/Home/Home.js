import React, { Component } from 'react';
import './home.css';

import PostForm from '../../containers/PostForm/PostForm';
import { Feed } from '../Feed/Feed';
import { NoFeed } from '../NoFeed/NoFeed';

class Home extends Component  {
  constructor(props){
    super(props)

    this.state = {
      feed: []
    }
  }

  componentDidMount = () => {

  }

  render() {
  return (
    <div className="home">
      <div className="current-locaton-container">
        <p className="current-location-text">Updates for Denver</p>
      </div>
      <PostForm />
      <div className="feed-container">
        {
          this.state.feed.length ? 
            <Feed />
            :
            <NoFeed />
        }
      </div>
    </div>
  )
}
}

export default Home; 