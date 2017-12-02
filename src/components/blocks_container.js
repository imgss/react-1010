import React, { Component } from 'react';
import Block from './block'
class Blocks extends Component {//俄罗斯方块容器
  render() {
    return (
      <div className="container">
        {
            Array.from({length: 3}).map((i,index) => (<Block key={index}/>))
        }
      </div>
    );
  }
}

export default Blocks;
