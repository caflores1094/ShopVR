import React from 'react';
import axios from 'axios';
import FriendsWishlist from './FriendsWishlist.jsx';

var friends = {};
var names = [];
var ids = [];
class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: []
    }
  }

  getFriends(callback) {
    var context = this;
    axios.post('/api/getFriends', {id: this.props.user.id})
      .then(function(results) {
        console.log('front end results', results);
        context.setState({
          wishlist: results.data
        });
      })
      .catch(function(error) {
        console.log('Error getting friends', error);
      });
  }

  componentDidMount() {
    this.getFriends();
  }

  render() {
    return(
      <div className="friends-container">
        <div className="friends-header">See Friends' Wishlists</div>
        <FriendsWishlist list={this.state.wishlist} />
      </div>
    );
  }
}

export default Friends;