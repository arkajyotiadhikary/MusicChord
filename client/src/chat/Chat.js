import React, { Component } from "react";
import ChannelList from "./ChannelList";
import MessagePanel from "./MessagePanel";
import "./chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { channels: [{ id: 1, name: "first", participants: 10 }] };
    //REVIEW why we are passing channels as state?
    // REVIEW after declaring channels state here, can we access it from every components?
  }

  componentDidMount() {
    this.loadChannels();
  }

  loadChannels = async () => {
    fetch("http://localhost:8000/getChannels").then(async (res) => {
      let data = await res.json();
      this.setState({ channels: data });
    });
  };

  render() {
    return (
      <div className="chat-app">
        <ChannelList channels={this.state.channels} />
        <MessagePanel />
      </div>
    );
  }
}

export default Chat;
