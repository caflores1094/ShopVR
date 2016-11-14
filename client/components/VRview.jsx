import React from 'react';
import Sharebar from './Sharebar.jsx';
import Setting from './setting.jsx';

var user = {
  username: 'Victor',
  email: 'fake@gmail',
  gender: 'male',
  lowprice: '10',
  highprice: '20'
};


class VRview extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
