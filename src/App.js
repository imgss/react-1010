import React, { Component } from 'react';
import Grid from './components/grid'
import ColorGrid from './components/color_grid'
import Blocks from './components/blocks_container'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag(index){
    console.log(index)
  }

  render() {
    return (
      <div className="App">
        <Grid/>
        <ColorGrid/>
        <Blocks onDrag={this.handleDrag}/>
      </div>
    );
  }
}

export default App;
