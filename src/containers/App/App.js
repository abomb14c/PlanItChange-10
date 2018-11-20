import React, { Component } from 'react';
import './App.css';

import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import Login from '../../components/Login/Login';
import Home from '../../components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation /> 
        </header>
        <Switch>
          <Route
            exact path= "/login"
            render={() => (
              this.props.user.user_id ?
                <Redirect to="/" /> :
                <Login />
            )}
          />
          <Route
            exact path= "/"
            render={() => (
              !this.props.user.user_id ?
                <Redirect to="/login" /> :
                <Home/>
            )}
          />
          </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps, null)(App));
