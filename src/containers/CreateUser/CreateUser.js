import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addUserFetch } from '../../apiCalls/apiCalls';
import { updateUser } from '../../actions/updateUser/updateUser';
import './create-user.css';
import PropTypes from 'prop-types';

export class CreateUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  
    // const response = await addUserFetch(this.state);
    // this.props.handleSignup({userId: response.userId, 
    //   username: this.state.username});
  
  }
  
  render() {
    return (
      <form className="create-user-form" onSubmit={this.handleSubmit}>
        <h3 className="login-title">Create Account</h3>
        <input
          className="create-user"
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleChange}
        />
        <input
          className="create-user"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          className="create-user"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="submit" className="create-user-button">Create Account</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  handleSignup: (user) => dispatch(updateUser(user))
});

export default connect(null, mapDispatchToProps)(CreateUser);

CreateUser.propTypes = {
  handleSignup: PropTypes.func
};
