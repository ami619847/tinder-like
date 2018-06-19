import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Mainscreen from './components/mainscreen/Mainscreen';
import Profilescreen from './components/Profilescreen';

//import ChatScreen from './components/ChatScreen'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={ Mainscreen } />
          <Route exact path="/profile" component={ Profilescreen } />
      </div>
    );
  }
}

export default App;
