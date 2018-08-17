import _ from 'lodash';
import React, { Component } from 'react';
import SideBar from '../component/Sidebar.js';
import Main from '../component/Main.js';

import store from '../store/index.js';

import './App.css';

class App extends Component {
  render() {
    const { contacts } = store.getState();
    return (
      <div className="App">
        <SideBar contacts={_.values(contacts)} />
        <Main /> 
      </div>
    );
  }
}

export default App;
