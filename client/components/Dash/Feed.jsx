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
      console.log(response);
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('Error in sending ajax data ', error);
    });
  }

  like(props) {
    var userID = props.user.id;
    //{name:"", id:"", ....}
    //pass "this" and user id to server endpoint to pass into db
    var item = this;
    item['userID'] = props.user.id;
    console.log(item);
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
        <h1>Your Recommendations</h1>
        <p>Sort by: <button onClick={this.props.sortPrice}>Price</button> <button onClick={this.props.sortBrand}>Retailer</button> <button onClick={this.props.sortCat}>Category</button></p>
        {this.props.feed.map((item) =>
          <div>
            <FeedItem item={item} key={item.id}/>
            <button onClick={this.like.bind(item)(this.props)}>Heart!</button>
          </div>
        )}
        <button onClick={this.props.toggleShow}>Show {this.props.feed.length > 25 ? 'Less' : 'More'}</button>
      </div>
    );
  }
}

export default Feed;
