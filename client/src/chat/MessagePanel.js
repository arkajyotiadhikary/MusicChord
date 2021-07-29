import React from "react";
import Message from "./Message";

class MessagePanel extends React.Component {
  render() {
    let list = (
      <div className="no-content-message">There is no message to show</div>
    );

    if (this.props.channel && this.props.channel.messages) {
      // REVIEW where is this.props.channel and where is this.props.channel.messages
      list = this.props.channel.messages.map((m) => <Message key={m.id} />);
    }

    return (
      <div className="message-panel">
        <div className="message-list">{list}</div>
        <div className="message-input">
          <input type="text"></input>
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export default MessagePanel;
