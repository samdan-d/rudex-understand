import _ from 'lodash';
import React, { Component } from 'react';
import SideBar from '../component/Sidebar.js';
import Main from '../component/Main.js';

import store from '../store';

import './App.css';

class App extends Component {
  render() {
    const { contacts, user, activeUserId } = store.getState();
    return (
      <div className="App">
        <SideBar contacts={_.values(contacts.contacts)} />
        <Main user={user} activeUserId={activeUserId} /> 
      </div>
    );
  }
}

export default App;
