import React from 'react';

export const Feed = (props) => {
 const { posts } = props; 
 const displayFeed = posts.map(post => {
  //  return post
 })
  return (
    <div>
      {displayFeed}
    </div>
  )
}