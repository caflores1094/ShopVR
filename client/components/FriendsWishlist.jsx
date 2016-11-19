import React from 'react';
import FriendsWishlistItem from './FriendsWishlistItem.jsx';

class FriendsWishlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('friends wishlist', this.props);
    return (
      <div className="friends-wishlist">
        {
          this.props.list.map((item, i) => (
            <FriendsWishlistItem key={i} item={item} />
            ))
        }
      </div>
    );      
  }
}

export default FriendsWishlist;
