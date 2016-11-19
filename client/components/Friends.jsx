import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', this.props);
  }

  getFriends() {
    axios.post('/api/getFriends', {id: this.props.user.id})
      .then(function(result) {
        console.log('getting friends', result.data);
      });
  }

  render() {
    this.getFriends();
    return(
      <div>Hello, Friends</div>
    );
  }
}

export default Friends;