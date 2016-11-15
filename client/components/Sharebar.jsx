import React from 'react';
import { browserHistory } from 'react-router';

class ShareBar extends React.Component {
  constructor(props) {
      super(props);
  }
   render() {
      return (
         <div>
           <div>
              <input type="text" id="room-id" defaultValue='testing' />
              <button id="open-room" onClick={() => connection.open(document.getElementById('room-id').value)}>Open Room</button>
              <input type="text" />
              <button>Send Invite</button>
              <button onClick={() => browserHistory.push('/')}>Back To Dashboard</button>
           </div>
         </div>
      );
   }
}

export default ShareBar;
