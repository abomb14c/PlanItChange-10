import React from 'react';
import './no-feed.css';

export const NoFeed = () => {
  return (
    <div className="no-feed">
      <h3 className="no-feed-title"> Looks like no one from this location has posted yet</h3>
      <h5 className="no-feed-desc">Write a message to fellow activists at the top to get things started</h5>
    </div>
  )
}