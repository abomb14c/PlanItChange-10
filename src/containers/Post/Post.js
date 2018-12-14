import React, { Component } from 'react';
import './post.css';


class Post extends Component {
  constructor(props){
    super(props)

    this.state= {
      likes: 0,
      updated: false

    }
  }

  updateLikes = () => {
    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1, 
          updated: true
        }
      })
      console.log(this.state)
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        }
      })
      console.log(this.state)
    }
  }

  componentDidMount = () => {
    this.updateLikes()
  }

  render(){
    return (
      <div className="post-container">
        <div className="post-text">
          <h1 className="post-title">{this.props.post.title}</h1>
          <p className="post-desc">{this.props.post.desc}</p>
        </div>
        <div className="interact-container">
          <div 
            onClick={this.updateLikes}
            className={this.state.updated ? 'like-container' : 'static-icon'}
            >
            </div>
            <div
            onClick={this.replyToPost}
            className='reply-button'
            />
        </div>
      </div>
    )
  }
}

export default Post;