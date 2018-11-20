import React, { Component } from 'react';
import './home.css';

import PostForm from '../../containers/PostForm/PostForm';
import { Feed } from '../Feed/Feed';

class Home extends Component  {
  constructor(props){
    super(props)

    this.state = {
      feed: ''
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
      {this.state.feed.length ? 
        <Feed />:
        null}
    </div>
  )
}
}

export default Home; 