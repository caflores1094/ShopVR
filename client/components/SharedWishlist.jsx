import React from 'react';
import SharedWishlistPage from './SharedWishlistPage.jsx';
import axios from 'axios';

class SharedWishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendWishlist: [],
      friend: null,
      photo: null
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
    this.getWishList();
  }

  render() {
    var context = this;
    return (
      <div>
        <SharedWishlistPage getWishList={this.getWishList.bind(this)} list={this.state.friendWishlist} friend={this.state.friend} photo={this.state.photo}/>          
      </div>
    );
  }
}

export default SharedWishlist;
