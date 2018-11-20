import React, { Component } from 'react';
import './post.css';


class Post extends Component {
  constructor(props){
    super(props)

    this.state= {

    }
  }

  render(){
    return (
      <div className="post-container">
        <div className="post-text">
          <h1 className="post-title">{this.props.post.title}</h1>
          <p className="post-desc">{this.props.post.desc}</p>
        </div>
        <div className="interact-container">
          <div className="like-container">
            <div className="like-icon"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;