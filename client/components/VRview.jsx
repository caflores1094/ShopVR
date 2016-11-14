import React from 'react';
import Sharebar from './Sharebar.jsx';
import Setting from './Setting.jsx';


class VRview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;

    return (
      <div>
        <Sharebar />
        <Setting />
      </div>
    );
  }
}

export default VRview;
