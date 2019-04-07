import React, { Component } from 'react';
import Card from './components/Card'
import Fact from './components/Fact'
import './styles/styles.scss';
import DateTime from './components/DateTime';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cards">
          <DateTime />
          <Card />
          <Card />
          <Card />
        </div>
        <Fact />
      </div>
    );
  }
}

export default App;
