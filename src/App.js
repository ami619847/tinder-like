
import React, { Component } from 'react';
import './App.css';
import DiscoverScreen from './components/DiscoverScreen';
import ProfileScreen from './components/ProfileScreen'
import CurrentProfileScreen from './components/CurrentProfileScreen'
import ChatScreen from './components/ChatScreen'
import Mainscreen from './components/mainscreen/Mainscreen'
import Menu from './components/Menu'
import { Router, Route } from 'react-router';



class App extends Component {
  render() {
    return (

      <div className="App">
          <Route exact path="/" component={Mainscreen} />
          <Route exact path="/Discover" component={DiscoverScreen} />
          <Route exact path="/Profile" component={ProfileScreen} />
          <Route exact path="/cProfile" component={CurrentProfileScreen} />
          <Route exact path="/Chat" component={ChatScreen} />
      </div>
    );
  }
}

export default App;
//too deploy just run this in your command line: yarn run deploy
