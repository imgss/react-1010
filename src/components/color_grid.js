import React, { Component } from 'react';

class ColorGrid extends Component {//放方块的网格
  constructor(props){
    super(props)
    let cells = []
    for(let i = 0; i < 10; i++){
      cells.push([])
      for(let j = 0; j < 10; j++){
        cells[i][j] = {
          color: 'transparent',
          fill: 0
        }
      }
    }
    this.state = {
      cells
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleMouseOver(i,j,e){
    if(this.props.isDragging)
      console.log(i,j)
  }

  render() {
    let colorCells = [];
    let cells = this.state.cells
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
      colorCells.push(
        <div 
          className="cell" 
          style={{ backgroundColor: cells[i][j].color, zIndex: 10 }} 
          onMouseOver={(e) => this.handleMouseOver(i,j)}
          key={i+''+j}
        />)
      }
    }
    return (
      <div className="Grid color">
        {
            colorCells
        }
      </div>
    );
  }
}

export default ColorGrid;
