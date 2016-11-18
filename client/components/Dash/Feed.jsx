import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

var count = 0;

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    }
  }

  componentDidMount() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"
    axios.get("http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&offset=" + this.state.offset + "&fts=" + gender + "&limit=50")
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }
  next() {
    count++;
    this.setState({
      offset: count
    });
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"

    axios.get("http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&offset=" + this.state.offset + "&fts=" + gender + "&limit=50")
      .then(function (response) {
        context.props.setFeed(response.data.products);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }
  previous() {
    count--;
    this.setState({
      offset: count
    })
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"

    axios.get("http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&offset=" + this.state.offset + "&fts=" + gender + "&limit=50")
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
        <div className="feed-container">Feed
          <div className="recommended-items">
            <button className="sort-btn" onClick={this.props.sortPrice}>Price</button>
            <button className="sort-btn" onClick={this.props.sortBrand}>Retailer</button>
            <button className="sort-btn" onClick={this.props.sortCat}>Category</button>
          </div>
        </div>
        <br />
        <button className="show-items" onClick={this.props.toggleShow}>Show {this.props.feed.length > 25 ? 'Less' : 'More'}</button>
        <button className="show-previous" onClick={this.previous.bind(this)}>Previous</button>
        <button className="show-more" onClick={this.next.bind(this)}>Next</button>
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
