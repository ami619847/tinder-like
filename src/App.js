import React, { Component } from 'react';
import ChatScreen from './components/ChatScreen'
import './App.css';
import Test from './components/Test'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatScreen />
        <Test />


      </div>
    );
  }
}

export default App;
