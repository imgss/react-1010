import React, { Component } from 'react';
import Factory from '../js/Factory'
import { DragSource } from 'react-dnd';
class Block extends Component {
  constructor(props){
    super(props)
    this.state = Object.assign({style: {}}, Factory.createBlock())
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  handleMouseDown(e){
    console.log(e.target, e.currentTarget)
    let target = e.currentTarget
    document.addEventListener('mousemove',(e) => {
      this.setState({style: {position:'absolute',left:e.clientX,top:e.clientY}})
    })
  }

  render() {
    return (
      <div className="block_container" onMouseDown={this.handleMouseDown} style={this.state.style}>
        {
            this.state.shape.map((i,index) => (
              <div 
              key={index} 
              className="block_cell" 
              style={{background: (i ? this.state.color: 'transparent')}}
              />
            ))
        }
      </div>
    );
  }
}

export default Block;
