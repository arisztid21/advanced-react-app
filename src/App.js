import React, { Component } from 'react';
import './App.css';
import Elephant from './elephants';
import GodsContainer from './GodsContainer';
import GodsContainerLocalstorage from './GodsContainerLocalstorage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Elephant count={10}/>
        <GodsContainer />
        <GodsContainerLocalstorage />
      </div>
    );
  }
}

export default App;
