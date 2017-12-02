import React, { Component } from 'react';
import Factory from '../js/Factory'
class Block extends Component {
  constructor(props){
    super(props)
    this.state = Object.assign({style: {}}, Factory.createBlock())
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  handleMouseDown(e){
    document.onmousemove = (e) => {
      this.setState({
        style: {
          position: 'absolute',
          transform: 'scale(2)',
          left: e.clientX,
          top: e.clientY
        }
      })
    }
  }

  handleMouseUp(e){
    document.onmousemove = null
    this.setState({
      style: { }
    })
  }

  render() {
    return (
      <div className="block_container" onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} style={this.state.style}>
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
