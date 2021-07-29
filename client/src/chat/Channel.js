import React, { Component } from "react";

class Channel extends Component {
  render() {
    return (
      <div className="channel-item">
        <div>{this.props.name}</div>
        <div>{this.props.participants}</div>
      </div>
    );
  }
}

export default Channel;
