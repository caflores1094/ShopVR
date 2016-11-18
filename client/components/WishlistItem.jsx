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
      <div className="wishlist-item">
        <button className="wishlist-remove" onClick={()=> this.removeItem(this.props.picObj.pic_name, this.props.picObj.userid)}>X</button>
        <img className="wishlist-item-pic" src={this.props.picObj.pic_name} />
        <div className="wishlist-item-info">
          <p className="wishlist-item-name">{this.props.picObj.item_name}</p>
          <p className="wishlist-item-price">${this.props.picObj.price}</p>
          <a className="wishlist-link" href={this.props.picObj.url}>View</a>
          <br />
        </div>
      </div>
    );
 }
}

export default WishlistItem;
