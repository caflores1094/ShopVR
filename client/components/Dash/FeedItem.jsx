import React from 'react';
import axios from 'axios';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

//the below blocks are for social network sharing
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
} = ShareCounts;


class FeedItem extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        liked: false
      }
  }

  like() {
    this.setState({liked: true})
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

            <button className={this.state.liked ? "item-heart" : "item-heart2"} onClick={this.like.bind(this)}>❤</button>
            <div className="share-button-container">
              <FacebookShareButton
              url={this.props.item.clickUrl}
              title={this.props.item.retailer.name}
              className="social-icon">
                <FacebookIcon
                  size={20}
                  round={false} />
              </FacebookShareButton>

              <PinterestShareButton
                url={this.props.item.clickUrl}
                media={`${this.props.item.image.sizes.IPhoneSmall.url}`}
                windowWidth={1000}
                windowHeight={730}
                className="social-icon">
                <PinterestIcon size={20} round={true} />
              </PinterestShareButton>
            </div>
          </div>
        </div>

      );
   }
}

export default FeedItem;
