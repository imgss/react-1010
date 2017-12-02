import React, { Component } from 'react';
import Block from './block'
class Blocks extends Component {//俄罗斯方块容器
  constructor(props){
    super(props)
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDrag(shape){
    this.props.onDrag(shape)
  }

  render() {
    return (
      <div className="container">
        {
            Array.from({length: 3}).map((i,index) => (<Block key={index} isDrag={this.handleDrag}/>))
        }
      </div>
    );
  }
}

export default Blocks;
