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
      cells
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(i, j, e) {
    if (this.props.isDragging) {
      console.log(this.props.block);
      if (this.props.block) {
        let cells = this.state.cells;
        //刷新上一帧，待优化
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            cells[i][j] = {
              color: "transparent",
              fill: 0
            };
          }
        }
        for (let startX = Math.max(i - 2, 0); startX < i + 3; startX++) {
          for (let startY = Math.max(j - 2, 0); startY < j + 3; startY++) {
            cells[startX][startY] = {
              color: "rgba(255, 96, 96, .3)"
            };
          }
        }
        this.setState({
          cells
        });
      }
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
            style={{ backgroundColor: cells[i][j].color, zIndex: 10 }}
            onMouseOver={e => this.handleMouseOver(i, j)}
            key={i + "" + j}
          />
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
