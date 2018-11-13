import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/updateUser/updateUser';
import PropTypes from 'prop-types';

export const Navigation = (props) => {
  const signOutBtn = (
    <NavLink to='/' 
      className="sign-out"
      onClick={props.handleLogout}>
      Sign Out
    </NavLink>
  );

  return (
    <div className="nav">
      <div className="logo"></div>
      <div className="nav-links">
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/">
          Cities
        </NavLink>
        { 
          props.user.user_id ? 
            signOutBtn
            :
            <NavLink to="/login">Login</NavLink>
        }
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation); 

Navigation.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func
};