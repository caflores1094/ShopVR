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
      limit: 50
    }
  }

  componentDidUpdate() {
    if (start) {
      var context = this;
      var gender = this.props.user.gender === 'male' ? "men" : "women"
      axios.post("/api/shopstyle", {offset: count, fts: gender, limit: 50})
      .then(function (response) {
        context.props.setFeed(response.data.products, context.props.feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
    }
    start = false;
  
  }

  checkQueryType(updatedCount, context, callback) {
    console.log(this.props.feedType, 'feedtype in checkquerytype');
    console.log(this, 'this in checkquerytype');
    if (this.props.feedType === 'upload') {
      this.setState({ offset: updatedCount, fts: this.props.user.gender + '+' + this.props.searchQuery, limit: this.props.limit}, function() {
        console.log(this.state.offset, 'offset after update');

        callback();
      });
    } else if (this.props.feedType ==='query') {
      this.setState({ offset: updatedCount, fts: this.props.user.gender + '+' + this.props.brand + '+' + this.props.item, limit: this.props.limit}, function() {
        console.log(this.state.offset, 'offset after update');
        callback();
      });
    } else if (this.props.feedType ==='default') {
      console.log(context.state.offset, 'offset in else if'); 
      console.log(updatedCount, 'updatedCount else if'); 
      console.log('this in else if', this);
      this.setState({ offset: updatedCount, fts: this.props.user.gender, limit: 50 }, function() {
        console.log(this.state.offset, 'offset after update');

        callback();
      });

    }

  }

  queryAPI() {
    var setFeed = this.props.setFeed;
    var feedType = this.props.feedType
    console.log(this, 'this in queryAPI');
    console.log(this.state.fts, 'this.state.fts in queryAPI');
    axios.post("/api/shopstyle", {offset: this.state.offset, fts: this.state.fts, limit: this.state.limit})
      .then(function (response) {
        setFeed(response.data.products, feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }

  next() {
    //check feedType props to see if query or image upload or default
    //increment count by 50
    console.log('in next');
    count = count + 50;
    // this.setState({
    //   count: newCount
    // });
    console.log(count, 'newCount');
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    console.log('before checking query');
    this.checkQueryType(count, context, function() {
      console.log('before api query');
      context.queryAPI();
    });
  }

  previous() {
    count = count - 50;
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    this.checkQueryType(count, context, function() {
      console.log('before api query');
      context.queryAPI();
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
