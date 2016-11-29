import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidUpdate() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"
    axios.post("/api/shopstyle", {offset: this.props.offset, fts: gender, limit: 50})
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }
  next() {
    //check feedType props to see if query or image upload or default
    //increment count by 50
    var newCount = this.state.count + 50;
    this.setState({
      count: newCount
    });
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"

    //TODO: change query parameters depending on feedtype
    axios.post("/api/shopstyle", {offset: this.state.count, fts: gender, limit: 50})
      .then(function (response) {
        context.props.setFeed(response.data.products, this.props.feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }
  previous() {
    var newCount = this.state.count - 50;
    this.setState({
      count: newCount
    });
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women"

    //TODO: change query parameters depending on feedtype
    axios.post("/api/shopstyle", {offset: this.state.count, fts: gender, limit: 50})
      .then(function (response) {
        context.props.setFeed(response.data.products, this.props.feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }
  render() {

    return (
      <div className="feed">
        <div className="feed-container">{this.props.user.name + "'s"} Feed
          <div className="recommended-items">
            <button className="sort-btn" onClick={this.props.sortPrice}>Price</button>
            <button className="sort-btn" onClick={this.props.sortBrand}>Retailer</button>
            <button className="sort-btn" onClick={this.props.sortCat}>Category</button>
          </div>
        </div>
        <br />
        <div className="button-container">
          <button className="show-previous" onClick={this.previous.bind(this)}>{count === 0 ? '' : 'Previous'}</button>
          <button className="show-more" onClick={this.next.bind(this)}>Next</button>
        </div>
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
