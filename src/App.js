import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test' //just to test if the actions/reducers work

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
      </div>
    );
  }
}

export default App;
