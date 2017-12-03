import React, { Component } from "react";
import Block from "./block";
class Blocks extends Component {
  //生成俄罗斯方块的容器
  constructor(props) {
    super(props);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrag(i, x, y) {
    this.props.onDrag(x, y, i);
  }

  handleDrop(i){
    this.props.onDrop(i)
  }

  render() {
    return (
      <div className="container">
        {this.props.srcCells.map((blk, index) =>
          <Block key={index} isDrag={this.handleDrag.bind(this, index)} isDrop={this.handleDrop.bind(this, index) } block={blk}/>
        )}
      </div>
    );
  }
}

export default Blocks;
