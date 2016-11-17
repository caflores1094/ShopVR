import React from 'react';

class SharedView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;

    return (
      <div>
        <input type="text" id="room-id" defaultValue={window.location.search.slice(1)} />
        <button id="join-room" onClick={() => connection.join(document.getElementById('room-id').value)}>Join Room</button>
        <div id="videos-container"></div>
        <div id="audios-container"></div>
      </div>
    );
  }
}

export default SharedView;
