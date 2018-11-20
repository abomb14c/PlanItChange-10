import React from 'react';
import './home.css';

import PostForm from '../../containers/PostForm/PostForm';

const Home = (props) => {
  return (
    <div className="home">
      <div className="current-locaton-container">
        <p className="current-location-text">Updates for Denver</p>
      </div>
      <PostForm />
    </div>
  )
}

export default Home; 