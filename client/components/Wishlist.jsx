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
            this.props.list.map((picObj) => (
              <div key={picObj.pic_name}>
                <a href={picObj.url}>
                  <img src={picObj.pic_name} />
                  <p>{picObj.item_name}</p>
                </a>
                <p>${picObj.price}</p>
              </div>
              )
            )
          }
        </div>
      );
   }
}

export default Wishlist;
