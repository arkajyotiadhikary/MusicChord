import React, { Component } from "react";
import Channel from "./Channel";

class ChannelList extends Component {
  render() {
    return (
      <div className="channel-list">
        {this.props.channels.length ? (
          this.props.channels.map((c) => (
            <Channel
              key={c.id}
              id={c.id}
              name={c.name}
              participants={c.participants}
            />
          ))
        ) : (
          <p>There is no channel to show</p>
        )}
      </div>
    );
  }
}

export default ChannelList;
