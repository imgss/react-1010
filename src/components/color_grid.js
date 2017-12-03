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
        //填充阴影
        let startX = Math.max(i - 2, 0)
        let startY = Math.max(j - 2, 0)
        for (let m = 0; m < i + 3; m++) {
          for (let n = 0; n < j + 3; n++) {
            cells[startX + m] && this.props.block[m*5 + n] && (cells[startX + m][startY + n] = {
              color: "rgba(255, 96, 96, .3)"
            });
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
