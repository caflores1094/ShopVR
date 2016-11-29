import React from 'react';
import SharedWishlistPage from './SharedWishlistPage.jsx';
import axios from 'axios';
import ChatText from './ChatText.jsx';

class SharedWishlist extends React.Component {
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
      friendWishlist: [],
      friend: null,
      photo: null,
      friendFound: false,
      chatText: '',
      chatLog: [],
      room: string ? string : ''
    };
  }

  getWishList() {
    var friendUserID = this.props.location.pathname.slice(1,);
    var context = this;

    var obj = {};
    obj['friendUserID'] = friendUserID;
    var finalArr = [];

    //get all wishlist items for this particular user
    axios.post('/api/getWishListForFriend', obj)
      .then(function(result) {
        var dataArr = result.data;
        if (dataArr.length > 1) {
          context.setState({friendFound: true});
        }
        var wlObj = {};
        dataArr.forEach((elem) => {
          wlObj[elem.pic_name] = elem;
        });

        for(var key in wlObj){
          finalArr.push(wlObj[key]);
        }
        context.setState({ friendWishlist: finalArr });
        axios.post('/api/getUserInfo', obj)
          .then(function(result) {
            console.log('result from getting userinfo', result);
            context.setState({ friend: result.data[0].name});
            context.setState({ photo: result.data[0].profile_pic});

           })
          .catch(function (error) {
            console.log('Error getting friend wishlist', error);
          });

      })
      .catch(function (error) {
        console.log('Error getting friend wishlist', error);
      });
  }


  componentDidMount(){
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

    this.getWishList();
  }

  roomSubmit(e) {
    e.preventDefault();
    this.state.chatLog = [];
    this.setState({room: this.refs.room.value}, () => {
      if (this.state.room !== '') {

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
    var context = this;
    return (
      <div>
        <SharedWishlistPage getWishList={this.getWishList.bind(this)} list={this.state.friendWishlist} friend={this.state.friend} photo={this.state.photo} friendFound={this.state.friendFound}/>
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

export default SharedWishlist;
