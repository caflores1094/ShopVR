import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Wishlist from './Wishlist.jsx';
import ShareLink from './ShareLink.jsx';
import ChatText from './ChatText.jsx';


class Profile extends React.Component {
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
      name: this.props.user.name,
      email: this.props.user.email,
      gender: this.props.user.gender,
      min_price: this.props.user.min_price,
      max_price: this.props.user.max_price,
      myImages: [],
      wishList: [],
      showShare: false,
      chatText: '',
      chatLog: [],
      room: string ? string : ''
    }
  }

  getMyImages(){
    var obj = {};
    obj['u_id'] = this.props.user.id;
    var context = this;
    axios.post('/api/myImages', obj)
    .then(function(result) {
      context.setState({ myImages: result.data})
    });
  }

  handleInputChange(name, e) {
    e.preventDefault();
    var update = {};
    update[name] = e.target.value
    this.setState(update);
  }

  handleUpdate(e) {
    e.preventDefault();
    var obj = this.state;
    obj['id'] = this.props.user.id;

    var context = this;

    axios.post('/update/profile', obj)
    .then(function(result) {
      window.location.assign('/profile');
    });
  }

  getWishList() {
    var obj = {};
    obj['userID'] = this.props.user.id;
    var context = this;
    axios.post('/api/getWishList', obj)
    .then(function(result) {
      var dataArr = result.data;
      var wlObj = {};
      dataArr.forEach((elem) => {
        wlObj[elem.pic_name] = elem;
      });

      var finalArr = [];

      for(var key in wlObj){
        finalArr.push(wlObj[key]);
      }
      context.setState({ wishList: finalArr})
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
        this.FBmsg();
      }
    });
  }

  FBmsg() {
    FB.ui({
      method: 'send',
      link: window.location.origin + '/' + this.props.user.id + '?' + this.state.room
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

  shareWishlist() {
    console.log('this in sharewishlist', this);
    //display sharing wishlist url structure
    this.setState({ showShare: !this.state.showShare });
    console.log(this.state.showShare, 'share state');
  }

  render() {
    return (
       <div>
          <div className="profile-welcome">
            <div className="profile-welcome-text">Welcome, {this.props.user.name}</div>
          </div>
            <form className="profile-container">
              <img className="profile-pic" src={this.props.user.profile_pic} />
              <div className="profile-info">
                <p>Name:</p>
                <input className="profile-input" onChange={this.handleInputChange.bind(this, 'name')} type="text" defaultValue={this.props.user.name}/>
                <p>Email:</p>
                <input className="profile-input" onChange={this.handleInputChange.bind(this, 'email')} type="text" defaultValue={this.props.user.email}/>
                <p>Gender:</p>
                  <select className="profile-select" onChange={this.handleInputChange.bind(this, 'gender')} defaultValue={this.props.user.gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                <p>Min Price:</p>
                  <input className="profile-input" onChange={this.handleInputChange.bind(this, 'min_price')} type="number" defaultValue={this.props.user.min_price}/>
                <p>Max Price:</p>
                  <input className="profile-input" onChange={this.handleInputChange.bind(this, 'max_price')} type="number" defaultValue={this.props.user.max_price}/>
                <br />
                <button className="profile-button" type="submit" onClick={(e)=>this.handleUpdate(e)} value="Submit">Update</button>
              </div>
            </form>
          <div className="wishlist-container">
            <div className="wishlist-header">
              My Wishlist
              <button className="wishlist-button" onClick={this.shareWishlist.bind(this)}>Share My Wishlist</button>
              <div className="wishlist-share">{ this.state.showShare ? <ShareLink userid={this.props.user.id} username={this.props.user.name}/> : null }</div>
            </div>
            <div className='wishlist'>
              <Wishlist getWishList={this.getWishList.bind(this)} list={this.state.wishList}/>
            </div>
            <div>
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
          </div>
       </div>
    );
  }
}

export default Profile;
