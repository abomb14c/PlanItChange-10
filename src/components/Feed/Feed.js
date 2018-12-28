import React from 'react';
import './feed.css';

import Post from '../../containers/Post/Post';

export const Feed = (props) => {
 const { posts } = props; 
 const displayFeed = posts.map(post => {
   return <Post post={post} />
 })
  return (
    <div className="feed">
      {displayFeed}
    </div>
  )
}