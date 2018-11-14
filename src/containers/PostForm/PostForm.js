import React, { Component } from 'react';
import './post-form.css';

class PostForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      title:'',
      body:''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    return (
      <div className='post-form'>
        <form>
          <input
            className="post-title"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            className="post-body"
            type="text"
            name="body"
            value={this.state.body}
            placeholder="Message"
            onChange={this.handleChange}
          />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    )
  }
}


export default PostForm; 