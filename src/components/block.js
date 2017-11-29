import React, { Component } from 'react';
import Factory from '../js/Factory'
class Block extends Component {
  render() {
    let Block = Factory.createBlock()
    return (
      <div className="block_container">
        {
            Block.map((i,index) => (<div key={index} className="block_cell" style={{background: (i ? 'black': 'transparent')}}/>))
        }
      </div>
    );
  }
}

export default Block;
