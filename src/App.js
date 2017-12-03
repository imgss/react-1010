import React, { Component } from "react";
import Grid from "./components/grid";
import ColorGrid from "./components/color_grid";
import Blocks from "./components/blocks";
import Factory from "./js/Factory";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    let srcCells = [];
    let targetCells = [];
    for(let m = 0; m < 3; m++){
      srcCells.push(Factory.createBlock())
    }
    for (let i = 0; i < 10; i++) {
      targetCells.push([]);
      for (let j = 0; j < 10; j++) {
        targetCells[i][j] = {
          color: "transparent",
          fill: 0
        };
      }
    }
    this.state = {
      srcCells,
      targetCells,
      isDragging: false,
      dragBlock: [],
      dragColor: ''
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag(x, y, i) {
    let srcCells = this.state.srcCells;
    srcCells[i].style = {
      position: "absolute",
      transform: "scale(2)",
      left: x,
      top: y
    }
    this.setState({
      srcCells,
      isDragging: true,
      dragBlock: srcCells[i]
    });
  }

  handleDrop(i){
    let srcCells = this.state.srcCells;
    srcCells[i].style = {}
    this.setState({
      srcCells,
      isDragging: false
    });

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
          ref={colorGrid => this.colorGrid = colorGrid}
        />
        <Blocks onDrag={this.handleDrag} onDrop={this.handleDrop} srcCells={this.state.srcCells}/>
      </div>
    );
  }
}

export default App;
