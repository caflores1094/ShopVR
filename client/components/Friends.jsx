import React from 'react';
import axios from 'axios';
import FriendsWishlist from './FriendsWishlist.jsx';
import ChatText from './ChatText.jsx';

var friends = {};
var names = [];
var ids = [];
class Friends extends React.Component {
  constructor(props) {
    var string = window.location.search.slice(1).split('');
    for (var i = 0; i < string.length; i++) {
      if (string[i] === '+') {
        string[i] = ' ';
      }
    }
    string = string.join('');

    super(props);
    this.state = {
      wishlist: [],
      chatText: '',
      chatLog: [],
      room: string ? string : ''
    };
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
    this.state.chatLog = [];
    this.setState({room: this.refs.room.value}, () => {
      if (this.state.room !== '') {
        this.FBmsg();
      }
    });
  }

  chatSubmit(e) {
    e.preventDefault();
    if (this.state.chatText !== '' && this.state.room !== '') {
      this.socket.emit('chat message', {room: this.state.room, user: this.props.user.name, text: this.state.chatText});
      this.refs.text.value = '';
      this.setState({chatText: ''});
    }
  }

  FBmsg() {
    FB.ui({
      method: 'send',
      link: window.location.href + '?' + this.state.room
    });
  }

  render() {
    return(
      <div className="friends-container">
        <div className="friends-header">See Friends' Wishlists</div>
        <FriendsWishlist list={this.state.wishlist} />
        <form onSubmit={(e) => this.roomSubmit(e)}>
          <input name='room' ref='room' defaultValue={this.state.room}/>
          <button>Set Room</button>
        </form>
        <div className="chatbox">
          {
            this.state.chatLog.map((obj, i) => (
              <ChatText key={i} text={obj.text} name={obj.user} user={this.props.user}/>
              ))
          }
        </div>
        <form onSubmit={(e) => this.chatSubmit(e)}>
          <input name='text' ref='text' onChange={(e) => this.setState({chatText: e.target.value})}/><button>Send</button>
        </form>
      </div>
    );
  }
}

export default Friends;
