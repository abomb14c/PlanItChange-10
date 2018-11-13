import React, { Component } from 'react';
import './App.css';

import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation';
import Login from '../../components/Login/Login';

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
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
