import React from 'react';

class ChatText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-text">
        <p className="chat-user">{this.props.user.name === this.props.name ? 'Me' : this.props.name}:</p> <p className="chat-message"> {this.props.text}</p>
      </div>
    );
  }
}

export default ChatText;
