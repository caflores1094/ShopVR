import React from 'react';
import axios from 'axios';


class WishlistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeItem(name, userID){
    var item = {
      itemName: name,
      userID: userID
    }
    var context = this;

    axios.post('/api/removeFromWishList', item)
      .then(function(response) {
        context.props.getWishList();
      })
      .catch(function (error) {
        console.log('Error liking', error);
      });
  }

  render() {
    return (
      <div>
        <a href={this.props.picObj.url}>
        <img src={this.props.picObj.pic_name} />
        <p>{this.props.picObj.item_name}</p>
        </a>
        <p>${this.props.picObj.price}</p>
        <button onClick={()=> this.removeItem(this.props.picObj.pic_name, this.props.picObj.userid)}>Remove From Wishlist</button>
      </div>
    );
 }
}

export default WishlistItem;
