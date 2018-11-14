import React, { Component } from 'react';
import './post-form.css';

class PostForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      title:'',
      body:""
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
      <div className='post-form-container'>
        <div className="post-form">
          <label className="label">
            What's On Your Mind?
          <textarea
            className="post-body"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          </label>
          <button className="submit-button">Submit</button>
          </div>
        {/* </form> */}
      </div>
    )
  }
}


export default PostForm; 