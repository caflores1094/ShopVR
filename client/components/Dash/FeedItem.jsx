import React from 'react';
import axios from 'axios';


class FeedItem extends React.Component {
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
         <div><a href={this.props.item.clickUrl}>
            <img src={this.props.item.image.sizes.IPhoneSmall.url} />
            <p>{this.props.item.name}</p></a>
            <button onClick={this.like.bind(this)}>Heart!</button>
            <p>{this.props.item.currency} {this.props.item.price}</p>
            <p>{this.props.item.categories[0].name}</p>
            <p>{this.props.item.retailer.name}</p>
         </div>
      );
   }
}

export default FeedItem;
