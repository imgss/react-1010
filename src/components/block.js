import React, { Component } from "react";
import Factory from "../js/Factory";
class Block extends Component {
  //生成俄罗斯方块
  constructor(props) {
    super(props);
    this.state = Object.assign({ style: {} }, Factory.createBlock());
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.props.isDrag(this.state.shape);
    document.onmousemove = e => {
      //通知app在拖拽了
      this.setState({
        style: {
          position: "absolute",
          transform: "scale(2)",
          left: e.clientX,
          top: e.clientY
        }
      });
    };
    document.onmouseup = e => {
      //不绑在俄罗斯方块上是因为方块网格的z-index在俄罗斯方块上面，俄罗斯方块监听不到mouseup
      //通知拖拽结束
      this.props.isDrag(null);
      document.onmousemove = null;
      this.setState({
        style: {}
      });
    };
  }

  render() {
    return (
      <div
        className="block_container"
        onMouseDown={this.handleMouseDown}
        style={this.state.style}
      >
        {this.state.shape.map((i, index) =>
          <div
            key={index}
            className="block_cell"
            style={{ background: i ? this.state.color : "transparent" }}
          />
        )}
      </div>
    );
  }
}

export default Block;
