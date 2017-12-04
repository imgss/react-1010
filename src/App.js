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
      canDrop: true,
      dragBlock: {}
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.dropBlock = this.dropBlock.bind(this);
    this.drawShadow = this.drawShadow.bind(this);
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
  //放置方块
  handleDrop(i){
    if(this.state.canDrop){
      console.log('可以放')
      let cells = this.state.targetCells;
      let color = this.state.dragBlock.color;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (cells[i][j].color === "rgba(255, 96, 96, .3)") {
            cells[i][j] = {
              color: color,
              fill: 1
            };
          }
        }
      }
      let srcCells = this.state.srcCells;
      let index = this.state.srcCells.indexOf(this.state.dragBlock)
      srcCells.splice(index, 1)
      console.log({index},srcCells.splice(index, 1))
      this.setState({ 
        targetCells: cells,
        isDragging: false,
        srcCells: srcCells
      });
    }else{
      let srcCells = this.state.srcCells;
      srcCells[i].style = {}
      this.setState({
        srcCells,
        isDragging: false,
        dragBlock: null
      });
    }
  }
  //画出block移动时的阴影
  drawShadow(x, y){
    if (this.state.isDragging) {
      let cells = this.state.targetCells;
      let {shape} = this.state.dragBlock
      //刷新上一帧，待优化
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (!cells[i][j].fill) {
            cells[i][j] = {
              color: "transparent",
              fill: 0
            };
          }
        }
      }
      //填充阴影
      let startX = x - 2,startY = y - 2;
      for (let m = 0; m<5; m++) {
        for (let n = 0; n<5; n++) {
          let cellX = startX + m, cellY = startY + n; 
          if(cellX>=0 && cellX<10 && cellY>=0 && cellY<10){
            if (!cells[cellX][cellY].fill) {
              shape[m * 5 + n] && (cells[cellX][cellY] = {
                  color: "rgba(255, 96, 96, .3)"
                })
              } else {
                this.state.canDrop = false;
              }
          }else{
            console.log('out',cellX, cellY)
          }
        }
      }
      console.log('===========')
      this.setState({
        targetCells:cells
      });
    }

  }

  dropBlock(){
    // console.log('可以放置')
  }

  render() {
    return (
      <div className="App">
        <Grid />
        <ColorGrid
          isDragging={this.state.isDragging}
          targetCells={this.state.targetCells}
          block={this.state.dragBlock}
          onBlockMove={this.drawShadow}
          canDrop = {this.dropBlock}
          ref={colorGrid => this.colorGrid = colorGrid}
        />
        <Blocks
        onDrag={this.handleDrag}
        onDrop={this.handleDrop}
        srcCells={this.state.srcCells}/>
      </div>
    );
  }
}

export default App;
