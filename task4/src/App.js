import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Main, Actors, NotFound } from './components/pages';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/">Главная</Link> / <Link to="/actors">Aктеры</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/actors" component={Actors} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
