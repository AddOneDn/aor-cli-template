import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import Home from './components/Home';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route path='/home' component={Home}/>
      </Switch>
    );
  }
}

export default App;