
import React, { Component } from 'react';
import './App.css';
import DiscoverScreen from './components/DiscoverScreen'
import ProfileScreen from './components/ProfileScreen'
import ChatScreen from './components/ChatScreen'
import Menu from './components/Menu'
import { Router, Route } from 'react-router';

class App extends Component {
  render() {
    return (
    
      <div className="App">


        <Route path="/Discover" component={DiscoverScreen} />
        <Route path="/Profile" component={ProfileScreen} />
        <Route path="/Chat" component={ChatScreen} />

      </div>
    );
  }
}

export default App;
