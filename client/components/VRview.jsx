import React from 'react';
import Sharebar from './Sharebar.jsx';
import Setting from './setting.jsx';


class VRview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;
    var vrFeed = this.props.feed.map((clothingObj)=> clothingObj.image.sizes.IPhoneSmall.url );

    return (
      <div>
        <Sharebar user={this.props.user}/>
        <Setting user={this.props.user} feed={vrFeed}/>
      </div>
    );
  }
}

export default VRview;
