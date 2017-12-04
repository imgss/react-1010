import React, { Component } from "react";
//放方块的网格
class ColorGrid extends Component {
  constructor(props) {
    super(props);
    let cells = [];
    for (let i = 0; i < 10; i++) {
      cells.push([]);
      for (let j = 0; j < 10; j++) {
        cells[i][j] = {
          color: "transparent",
          fill: 0
        };
      }
    }
    this.state = {
      cells,
      canDrop: true
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(i, j, e) {
    if (this.props.isDragging) {
      let cells = this.state.cells;
      let {shape,color} = this.props.block
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
      console.log('start=====================')
      let startX = i - 2,startY = j - 2;
      for (let m = 0; m<5; m++) {
        for (let n = 0; n<5; n++) {
          let cellX = startX + m, cellY = startY+n; 
          if(cellX>=0 && cellX<10 && cellY>=0 && cellY<10){
            console.log(cellX, cellY, shape[m * 5 + n])
            if (!cells[cellX][cellY].fill) {
              shape[m * 5 + n] && (cells[cellX][cellY] = {
                  color: "rgba(255, 96, 96, .3)"
                })
              } else {
                console.log('break',cellX, cellY);
                // this.setState({
                //   // canDrop: false
                // });
                // return;
              }
              this.props.canDrop()
          }else{
            console.log('out',cellX, cellY)
          }
        }
      }
      console.log('===========')
      this.setState({
        cells
      });
    }
  }

  fillGrid(color) {
    return;
    console.log(this.state.canDrop, color);
    if (this.state.canDrop) {
      let cells = this.state.cells;
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
      this.setState({ cells });
    }
  }

  render() {
    let colorCells = [];
    let cells = this.state.cells;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        colorCells.push(
          <div
            className="cell"
            style={{ backgroundColor: cells[i][j].color }}
            onMouseOver={e => this.handleMouseOver(i, j)}
            key={i + "" + j}
          ></div>
        );
      }
    }
    return (
      <div className="Grid color">
        {colorCells}
      </div>
    );
  }
}

export default ColorGrid;
