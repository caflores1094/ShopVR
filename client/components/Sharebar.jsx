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
      link: 'www.google.com/?' + this.state.roomid
    });
  }


   render() {
   console.log(this.state.roomid);
      return (
         <div>
           <div>
              <input type="text" id="room-id" onChange={(e) => this.setState({roomid: e.target.value})} defaultValue='Enter your room name' />
              <button id="open-room" onClick={() => connection.open(document.getElementById('room-id').value)}>Open Room</button>
              <button onClick={this.FBmsg.bind(this)}>Send FB Invite</button>
              <button onClick={() => window.location.assign('/')}>Back To Dashboard</button>
           </div>
         </div>
      );
   }
}

export default ShareBar;
