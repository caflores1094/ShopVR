import React from 'react';

class Social extends React.Component {
  constructor(props) {
      super(props);
  }
   render() {
      return (
         <div>
            <h1>Share with Friends</h1>
            <div>
               <input type="text" id="room-id" defaultValue='testing' />
               <button id="open-room" onClick={() => connection.open(document.getElementById('room-id').value)}>Open Room</button>
               <button id="join-room" onClick={() => connection.join(document.getElementById('room-id').value)}>Join Room</button>
            </div>

            <div id="videos-container"></div>
            <div id="audios-container"></div>

            <div>
               <input type="text" />
               <button>Send Invite</button>
            </div>
         </div>
      );
   }
}

export default Social;
