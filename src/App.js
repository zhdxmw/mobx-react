import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import logo from './logo.svg';
import Recommend from './pages/Recommend'
import Rank from './pages/Rank'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Switch>
              <Route path="/recommend" component={Recommend}></Route>
              <Route path="/rank" component={Rank}></Route>
          </Switch>
          <NavLink to="/recommend">recommend</NavLink>
          <br/>
          <NavLink to="/rank">rank</NavLink>
      </div>
    );
  }
}

export default App;
