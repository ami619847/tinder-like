
import React, { Component } from 'react';
import './App.css';
import DiscoverScreen from './components/DiscoverScreen';
import ProfileScreen from './components/ProfileScreen'
import CurrentProfileScreen from './components/CurrentProfileScreen'
import ChatScreen from './components/ChatScreen'
import Mainscreen from './components/mainscreen/Mainscreen'
import Menu from './components/Menu'
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL} />
          <Route exact path="/" component={Mainscreen} />
          <Route exact path="/Discover" component={DiscoverScreen} />
          <Route exact path="/dadProfile" component={ProfileScreen} />
            <Route exact path="/Profile" component={CurrentProfileScreen} />
          <Route exact path="/Chat" component={ChatScreen} />
      </div>
    );
  }
}

export default App;
