import React, { Component } from 'react';
import Grid from './components/grid'
import ColorGrid from './components/color_grid'
import Blocks from './components/blocks_container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid/>
        <ColorGrid/>
        <Blocks/>
      </div>
    );
  }
}

export default App;
