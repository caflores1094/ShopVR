import React from 'react';
import axios from 'axios';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');


class FeedItem extends React.Component {
  constructor(props) {
      super(props);
  }

  like() {
    console.log('liking item ');
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
        <div className="feed-item">
          <div className="feed-pic-container">
            <img className="feed-item-pic" src={this.props.item.image.sizes.IPhoneSmall.url} />
          </div>
          <br />
          <div className="feed-item-info">
            <p className="item-name">{this.props.item.name}</p>
            <p className="item-price">${this.props.item.price}</p>
            <p className="item-category">{this.props.item.categories[0].name}</p>
            <p className="item-retailer">{this.props.item.retailer.name}</p>
            <a className="item-link" href={this.props.item.clickUrl}>View</a>
            <br />
            <button className="item-heart" onClick={this.like.bind(this)}>❤</button>
            <div className="social-icon" ><FacebookIcon size={20} round={true} /></div>
            <div className="social-icon"><PinterestIcon className="social-icon" size={20} square={true} /></div>
          </div>
        </div>

      );
   }
}

export default FeedItem;
