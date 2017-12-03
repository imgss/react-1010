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
      dragBlock: []
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(block) {
    console.log(block);
    this.setState({
      isDragging: true,
      dragBlock: block
    });
  }

  render() {
    return (
      <div className="App">
        <Grid />
        <ColorGrid
          isDragging={this.state.isDragging}
          block={this.state.dragBlock}
        />
        <Blocks onDrag={this.handleDrag} />
      </div>
    );
  }
}

export default App;
