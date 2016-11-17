import React from 'react';
import axios from 'axios';


class WishlistItem extends React.Component {
  constructor(props) {
      super(props);
  }

  like() {
    console.log(this, 'this in like');
    //{name:"", id:"", ....}
    //pass "this" and user id to server endpoint to pass into db
    var item = this.props.item;
    item['userID'] = this.props.user.id;
    // item.userID = userID;
    axios.post('/api/like', item)
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('Error liking', error);
      });
  }
   render() {
      return (
         <div>
          <a href={this.props.picObj.clickUrl}>
          <img src={this.props.picObj.image.sizes.IPhoneSmall.url} />
          <p>{this.props.picObj.name}</p></a>
          <button onClick={this.like.bind(this)}>Heart!</button>
          <p>{this.props.picObj.currency} {this.props.picObj.price}</p>
          <p>{this.props.picObj.categories[0].name}</p>
          <p>{this.props.picObj.retailer.name}</p>
         </div>
      );
   }
}

export default WishlistItem;
