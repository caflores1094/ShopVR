import React from 'react';
import SharedWishlistItem from './SharedWishlistItem.jsx';
import axios from 'axios';

class SharedWishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendWishlist: {}
    }
  }

  componentDidMount() {
    var friendUserID = this.props.location.pathname.slice(1,);  
    var context = this;
    console.log(friendUserID, 'friend user id');
    console.log(context, 'context');

    var obj = {};
    obj['friendUserID'] = friendUserID;
    console.log(obj, 'obj');        
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
        console.log(context, 'context');
      })
      .catch(function (error) {
        console.log('Error getting friend wishlist', error);
      });
    context.setState({ friendWishlist: finalArr});
    console.log(this.state.friendWishlist);
  }

  render() {
    var context = this;
    return (
      <div>
         {
          context.state.friendsWishlist.map((picObj) => (
              <SharedWishlistItem key={picObj.pic_name} picObj={picObj} />
            )
          )
        }
      </div>
    );
  }
}

export default SharedWishlist;
