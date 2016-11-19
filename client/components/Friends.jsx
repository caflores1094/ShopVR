import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
  constructor(props) {
    super(props);
  }

  getFriends() {
    var friends = {};
    axios.post('/api/getFriends', {id: this.props.user.id})
      .then(function(results) {
        results.data.forEach(function(item) {
          axios.post('/api/getUser', {userid: item.userid})
            .then(function(user) {
              if (friends[user.data[0].name] === undefined) {
                friends[user.data[0].name] = { wishlist: [item] };
              } else {
                friends[user.data[0].name]['wishlist'].push(item);
              }
              console.log('friends obj', friends);
            });
        });
      });
  }

  componentWillMount() {
    this.getFriends();
  }

  render() {
    return(
      <div>Hello, Friends</div>
    );
  }
}

export default Friends;