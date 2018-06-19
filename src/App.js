import React, { Component } from 'react';
import ChatScreen from './components/ChatScreen'
import './App.css';
import Test from './components/Test' //just to test if the actions/reducers work

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatScreen />


      </div>
    );
  }
}

export default App;
