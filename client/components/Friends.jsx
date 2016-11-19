import React from 'react';
import axios from 'axios';
import FriendsWishlist from './FriendsWishlist.jsx';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      friends: {}
    }
  }

  getFriends() {
    var friends = {};
    var names = [];
    var context = this;
    axios.post('/api/getFriends', {id: this.props.user.id})
      .then(function(results) {
        results.data.forEach(function(item) {
          axios.post('/api/getUser', {userid: item.userid})
            .then(function(user) {
              if (friends[user.data[0].name] === undefined) {
                friends[user.data[0].name] = { wishlist: [item] };
                names.push(user.data[0].name);
              } else {
                friends[user.data[0].name]['wishlist'].push(item);
              }

              context.setState({
                names: names,
                friends: friends
              });
            });
        });
      });
  }

  componentWillMount() {
    this.getFriends();
  }

  render() {
    return(
      <div className="friends-wishlist">
        <FriendsWishlist wishlist={this.state.friends} names={this.state.names} />
      </div>
    );
  }
}

export default Friends;