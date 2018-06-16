import React, { Component } from 'react';
import { Button } from 'antd';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Button>Hello</Button>
      </div>
    );
  }
}

export default App;