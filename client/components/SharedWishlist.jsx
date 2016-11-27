import React from 'react';
import SharedWishlistItem from './SharedWishlistItem.jsx';

class SharedWishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendWishlist: {}
    }
  }

  componentWillMount() {
    var friendUserID = this.props.location.query.userid;  
    //get all wishlist items for this particular user
    axios.post('/api/getWishListForFriend', friendUserID)
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
        context.setState({ friendWishList: finalArr});
      })
      .catch(function (error) {
        console.log('Error getting friend wishlist', error);
      });
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
