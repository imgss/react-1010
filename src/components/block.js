import React, { Component } from "react";
class Block extends Component {
  //生成俄罗斯方块
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    e.preventDefault()
    console.log(e.target)
    let moveHandler = e => {
      //通知app在拖拽了
      let x = e.clientX
      let y = e.clientY
      this.props.isDrag(x, y);
    };
    document.onmousemove = moveHandler
    document.ontouchmove = moveHandler
    let upHandler = e => {
      if(e.target.className !== ' cell'){//被空格坑死
        return
      }
      //不绑在俄罗斯方块上是因为方块网格的z-index在俄罗斯方块上面，俄罗斯方块监听不到mouseup
      //通知拖拽结束
      // this.props.isDrag(null);
      this.props.isDrop();
      document.onmousemove = null;
      // this.setState({
      //   style: {}
      // });
    };
    document.onmouseup = upHandler
    document.ontouchend = upHandler
  }

  render() {
    return (
      <div
        className="block_container"
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleMouseDown}
        style={this.props.block.style}
      >
        {this.props.block.shape.map((i, index) =>
          <div
            key={index}
            className="block_cell"
            style={{ background: i ? this.props.block.color : "transparent" }}
          />
        )}
      </div>
    );
  }
}

export default Block;
