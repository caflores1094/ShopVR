import React from 'react';
import { browserHistory } from 'react-router';

class ShareBar extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        roomid: 'Enter your room name'
      }
  }

  FBmsg() {
    FB.ui({
      method: 'send',
      link: window.location.origin + '/view?' + this.state.roomid
    });
  }

   render() {
      return (
        <div>
          <input type="text" id="room-id" onChange={(e) => this.setState({roomid: e.target.value})} placeholder='Enter your room name' />
          <button className="vr-btn" id="open-room" onClick={() => connection.open(document.getElementById('room-id').value)}>Open Room</button>
          <button className="vr-btn" onClick={this.FBmsg.bind(this)}>Send FB Invite</button>
        </div>
      );
   }
}

export default ShareBar;
