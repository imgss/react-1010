import React, { Component } from 'react';

class Grid extends Component {//最底下的网格

  render() {
    return (
      <div className="Grid">
        {
            Array.from({length: 100}).map((i,index) => (<div className="cell" key={index}></div>))
        }
      </div>
    );
  }
}

export default Grid;
