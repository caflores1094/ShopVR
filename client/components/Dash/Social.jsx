import React from 'react';
import { browserHistory } from 'react-router';

class Social extends React.Component {
  constructor(props) {
      super(props);
  }
   render() {
      return (
         <div>
            <h1>Share with Friends</h1>
            <button onClick={(e) => {e.preventDefault(); browserHistory.push('/vr');}}>Start VR</button>
         </div>
      );
   }
}

export default Social;
