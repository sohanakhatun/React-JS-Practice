import React from "react";

class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ height: "100vh" }}>
           {typeof this.props.children === "function"
          ? this.props.children(this.state)
          : "not found"}
      </div>
    );
  }
}

export default MouseTracker;
