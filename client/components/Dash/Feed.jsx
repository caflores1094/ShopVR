import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

var count = 0;
var start = true;

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: count, 
      fts: this.props.user.gender, 
      limit: 50,
      currentFeedType: 'default',
    }
  }

  componentDidUpdate() {
    if (start) {
      var context = this;
      var gender = this.props.user.gender === 'male' ? "men" : "women";
      axios.post("/api/shopstyle", {offset: 0, fts: gender, limit: 50})
      .then(function (response) {
        context.props.setFeed(response.data.products, context.props.feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
    }
    start = false;
  
  }


  queryAPI(query) {
    var setFeed = this.props.setFeed;
    var feedType = this.props.feedType;
    console.log(this.state, 'state in queryAPI');
    
    axios.post("/api/shopstyle", query)
      .then(function (response) {
        console.log('api response', response);
        setFeed(response.data.products, feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }

  next() {
    //increment count by 50
    console.log('in next');
    count = count + 50;
    console.log(count, 'newCount');
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    //check feedType props to see if query or image upload or default
    if (this.props.feedType !== this.state.currentFeedType) {
      this.setState({currentFeedType: this.props.feedType}, function() {
        count = 0;
      })
    }
    //take query props and update count
    if (feedType !== 'default') {
      this.props.queryParams.offset = count;
    } else {

    }
    console.log('checking to see if offset got updated', this.props.queryParams.offset);
    //pass query into queryAPI
    this.queryAPI(this.props.queryParams);

    
  }

  previous() {
    count = count - 50;
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    //check feedType props to see if query or image upload or default
    //take query props and update count
    //pass query into queryAPI
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
