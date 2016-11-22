import React from 'react';

class ChatText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>{this.props.user.name === this.props.name ? 'Me' : this.props.name}: {this.props.text}</p>
    );
  }
}

export default ChatText;
