import React from 'react';
import WishlistItem from './WishlistItem.jsx';

class Wishlist extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
    var context = this;
      return (
        <div>
          {
            this.props.list.map((picObj) => (
                <WishlistItem key={picObj.pic_name} getWishList={context.props.getWishList} picObj={picObj}/>
              )
            )
          }
        </div>
      );
   }
}

export default Wishlist;
