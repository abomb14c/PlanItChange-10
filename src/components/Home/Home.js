import React, { Component } from 'react';
import './home.css';

import PostForm from '../../containers/PostForm/PostForm';
import { Feed } from '../Feed/Feed';
import { NoFeed } from '../NoFeed/NoFeed';

class Home extends Component  {
  constructor(props){
    super(props)

    this.state = {
      feed: [{title: 'New Event This Weekend', desc:'hey gang we have this dope shit goign on this weekend and you should really come, itd be supperrr dope and wed really love to hang', date:{day:'11/25/18', time:'7:00 pm'}} ]
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
            <Feed  posts={this.state.feed}/>
            :
            <NoFeed />
        }
      </div>
    </div>
  )
}
}

export default Home; 