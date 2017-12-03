import React, { Component } from "react";
class Block extends Component {
  //生成俄罗斯方块
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    console.log(e.target)
    document.onmousemove = e => {
      //通知app在拖拽了
      this.props.isDrag(e.clientX, e.clientY);
      // this.setState({
      //   style: {
      //     position: "absolute",
      //     transform: "scale(2)",
      //     left: e.clientX,
      //     top: e.clientY
      //   }
      // });
    };
    document.onmouseup = e => {
      if(e.target.className === 'App'){
        return
      }
      //不绑在俄罗斯方块上是因为方块网格的z-index在俄罗斯方块上面，俄罗斯方块监听不到mouseup
      //通知拖拽结束
      // this.props.isDrag(null);
      this.props.isDrop();
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
