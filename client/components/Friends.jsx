import React from 'react';
import axios from 'axios';
import FriendsWishlist from './FriendsWishlist.jsx';
import ChatText from './ChatText.jsx';

var friends = {};
var names = [];
var ids = [];
class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: [],
      chatText: '',
      chatLog: [],
      room: ''
    };
  }

  getFriends(callback) {
    var context = this;
    axios.post('/api/getFriends', {id: this.props.user.id})
      .then(function(results) {
        context.setState({
          wishlist: results.data
        });
      })
      .catch(function(error) {
        console.log('Error getting friends', error);
      });
  }

  componentDidMount() {
    var context = this;
    this.socket = io();
    this.socket.on('chat message', function(msg){
      if (msg.room === context.state.room) {
        var chat = context.state.chatLog;
        if (chat.length > 49) {
          chat = chat.slice(1);
        }
        chat.push(msg);
        context.setState({chatLog: chat});
      }
    });

    this.getFriends();
  }

  roomSubmit(e) {
    e.preventDefault();
    this.setState({room: this.refs.room.value});
  }

  chatSubmit(e) {
    e.preventDefault();
    if (this.state.chatText !== '' && this.state.room !== '') {
      this.socket.emit('chat message', {room: this.state.room, user: this.props.user.name, text: this.state.chatText});
      this.refs.text.value = '';
      this.setState({chatText: ''});
    }
  }

  render() {
    return(
      <div className="friends-container">
        <div className="friends-header">See Friends' Wishlists</div>
        <FriendsWishlist list={this.state.wishlist} />
        <div className="chatbox">
          {
            this.state.chatLog.map((obj, i) => (
              <ChatText key={i} text={obj.text} name={obj.user} user={this.props.user}/>
              ))
          }
        </div>
        <form onSubmit={(e) => this.roomSubmit(e)}>
          <input name='room' ref='room'/><button>Set Room</button>
        </form>
        <form onSubmit={(e) => this.chatSubmit(e)}>
          <input name='text' ref='text' onChange={(e) => this.setState({chatText: e.target.value})}/><button>Send</button>
        </form>
      </div>
    );
  }
}

export default Friends;
