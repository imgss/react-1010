import React, { Component } from "react";
import Grid from "./components/grid";
import ColorGrid from "./components/color_grid";
import Blocks from "./components/blocks_container";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      dragBlock: [],
      dragColor: ''
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag(block, color) {
    this.setState({
      isDragging: true,
      dragBlock: block,
      dragColor: color
    });
  }

  handleDrop(){
    this.setState({
      isDragging: false,
      dragBlock: null
    });
    this.colorGrid.fillGrid(this.state.dragColor)
  }

  render() {
    return (
      <div className="App">
        <Grid />
        <ColorGrid
          isDragging={this.state.isDragging}
          block={this.state.dragBlock}
          color={this.state.dragColor}
          ref={colorGrid => this.colorGrid = colorGrid}
        />
        <Blocks onDrag={this.handleDrag} onDrop={this.handleDrop}/>
      </div>
    );
  }
}

export default App;
