import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"
    axios.get("http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&fts=" + gender + "&limit=50")
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }



  render() {

    return (
      <div className="feed">
        <p className="recommended-items">Feed</p>
        <p className="sort-items">Sort by:</p>
        <br />
        <div className="filter-btn">
          <button className="sort-btn" onClick={this.props.sortPrice}>Price</button>
          <button className="sort-btn" onClick={this.props.sortBrand}>Retailer</button>
          <button className="sort-btn" onClick={this.props.sortCat}>Category</button>
        </div>
        <br />
        <button className="show-items" onClick={this.props.toggleShow}>Show {this.props.feed.length > 25 ? 'Less' : 'More'}</button>
        <br />
        <div className="feed-items">
          {this.props.feed.map((item, i) =>
            <FeedItem item={item} key={item.id} user={this.props.user}/>
          )}
        </div>
        <br />
      </div>
    );
  }
}

export default Feed;
