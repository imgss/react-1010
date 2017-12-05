import React, { Component } from "react";
//放方块的网格
class ColorGrid extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(i, j, e) {
    this.props.onBlockMove(i,j)
  }

  render() {
    let colorCells = [];
    let cells = this.props.targetCells;
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
