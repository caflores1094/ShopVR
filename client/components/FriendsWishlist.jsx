import React from 'react';

class FriendsWishlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;
    console.log('this', this.props.wishlist);
    return (
      <div>
        {this.props.names.map((name) => (
          name          
        ))}
      </div>
    );
  }
}

export default FriendsWishlist;
