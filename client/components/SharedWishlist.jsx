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
      room: string ? string : '',
      chat: 'none'
    };
  }

  toggleChat(name, e) {
    var toShow = {};
    if (this.state[name] === 'none') {
      toShow[name] = 'block';
      this.setState(toShow);
    } else {
      toShow[name] = 'none';
      this.setState(toShow);
    }
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
            if (result.data[0]) {
              context.setState({friendFound: true});
              context.setState({ friend: result.data[0].name});
              context.setState({ photo: result.data[0].profile_pic});
            }
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

  chatSubmit(e) {
    e.preventDefault();
    if (this.state.chatText !== '' && this.state.room !== '') {
      this.socket.emit('chat message', {room: this.state.room, user: this.props.user.name, text: this.state.chatText});
      this.refs.text.value = '';
      this.setState({chatText: ''});
    }
  }

  render() {
    if (this.props.user.hasOwnProperty('name')) {
      return (
        <div>
          <div>
            <SharedWishlistPage getWishList={this.getWishList.bind(this)} list={this.state.friendWishlist} friend={this.state.friend} photo={this.state.photo} friendFound={this.state.friendFound}/>
          </div>
          <div className="chat-area">
            <p className="chat-header">{this.state.room === '' ? 'Oops, no one is here! - Please ask your friend for an invite' : 'Chat Room: ' + this.state.room}</p>
            <div className="chat-box-area">
              <form onSubmit={(e) => this.chatSubmit(e)}>
                <input placeholder="Type message here..." name="text" className="chat-room" ref="text" onChange={(e) => this.setState({chatText: e.target.value})}/><button className="chat-btn">Send</button>
              </form>
              <div className="chatbox">
                <button onClick={this.toggleChat.bind(this, 'chat')} className="chat-btn">Show Chat</button>
                <div name="chat" style={{ display: this.state.chat }} className="chat">
                  {
                    this.state.chatLog.map((obj, i) => (
                      <ChatText key={i} text={obj.text} name={obj.user} user={this.props.user}/>
                      ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <SharedWishlistPage getWishList={this.getWishList.bind(this)} list={this.state.friendWishlist} friend={this.state.friend} photo={this.state.photo} friendFound={this.state.friendFound}/>
          <p>Please log in to chat with your friends!</p>
        </div>
      );
    }
  }
}

export default SharedWishlist;
