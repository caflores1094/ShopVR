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
      currentFeedType: this.props.feedType || 'default',
      queryParams: this.props.queryParams

    }
  }

  componentWillMount(){
    var context = this;

      var gender = this.props.user.gender === 'male' ? "men" : "women";
      axios.post("/api/shopstyle", {offset: 0, fts: gender, limit: 50})

      // var gender = this.props.user.gender === 'male' ? "men" : "women"
      var gender = this.props.user.gender;
      console.log(gender)
      axios.post("/api/shopstyle", {offset: count, fts: gender, limit: 50})

      .then(function (response) {
        context.props.setFeed(response.data.products, context.props.feedType);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }

//use component did update if facebook is too slow to get the gender in
  componentDidUpdate() {
    if (start) {
      console.log('updating')

      var context = this;

      var gender = this.props.user.gender === 'male' ? "men" : "women";
      axios.post("/api/shopstyle", {offset: 0, fts: gender, limit: 50})

      // var gender = this.props.user.gender === 'male' ? "men" : "women"
      var gender = this.props.user.gender;
      console.log(gender)
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


  queryAPI(query) {
    var setFeed = this.props.setFeed;
    var feedType = this.props.feedType;
    var context = this;
    
    axios.post("/api/shopstyle", query)
      .then(function (response) {
        console.log('api response', response);
        setFeed(response.data.products, feedType, context.state.queryParams);
      })
      .catch(function (error) {
        console.log('Error in sending ajax data ', error);
      });
  }

  next() {
    //increment count by 50
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    //check feedType props to see if query or image upload or default
    if (this.props.feedType !== this.state.currentFeedType) {
      this.setState({currentFeedType: this.props.feedType, queryParams: this.props.queryParams}, function() {
        count = 0;
      })
    } else {
      count += 50;
      console.log(count, 'count in else');

      var queryParams = this.state.queryParams;
      console.log(queryParams, 'qeuryParams before setting count');
      //take query props and update count
      if (this.props.feedType !== 'default') {
        queryParams.offset = count;
        console.log(queryParams.offset, 'queryparams offset');
      } else {

      }
      console.log('checking to see if offset got updated', queryParams);
      //pass query into queryAPI
      this.queryAPI(queryParams);
    }


    
  }

  previous() {
    var context = this;
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    if (this.props.feedType !== this.state.currentFeedType) {
      this.setState({currentFeedType: this.props.feedType, queryParams: this.props.queryParams}, function() {
        count = 0;
      })
    } else {
      count -= 50;
      console.log(count, 'count in else');

      var queryParams = this.state.queryParams;
      console.log(queryParams, 'qeuryParams before setting count');
      //take query props and update count
      if (this.props.feedType !== 'default') {
        queryParams.offset = count;
        console.log(queryParams.offset, 'queryparams offset');
      } else {

      }
      console.log('checking to see if offset got updated', queryParams);
      //pass query into queryAPI
      this.queryAPI(queryParams);
    }
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
