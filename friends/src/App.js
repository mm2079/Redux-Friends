import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsListView from "./views";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsListView />
      </div>
    );
  }
}

export default App;
