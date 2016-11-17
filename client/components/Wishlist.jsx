import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';
import ImageUpload from './Dash/ImageUpload.jsx';

class Wishlist extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
      return (
        <div>
          {
            this.props.list.map((picObj) => <img src={picObj.pic_name} />)
          }
        </div>
      );
   }
}

export default Wishlist;
