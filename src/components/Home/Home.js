import React from 'react';
import './home.css';

import PostForm from '../../containers/PostForm/PostForm';

const Home = (props) => {
  return (
    <div className="home">
      <PostForm />
    </div>
  )
}

export default Home; 