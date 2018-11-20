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
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.desc}</p>
        </div>
      </div>
    )
  }
}

export default Post;