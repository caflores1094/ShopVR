import React from 'react';
import FeedItem from './FeedItem.jsx';
import axios from 'axios';

var items = [
  {
    id: 'a',
    brand: 'Vans',
    item: 'Classic Black Skater',
    imgurl: 'http://a.dryicons.com/images/icon_sets/christmas_surprise_four_in_one/png/128x128/christmas_gift.png',
    price: 69.99
  },
  {
    id: 'b',
    brand: "Levi's",
    item: '510 Skinny Jeans',
    imgurl: 'http://a.dryicons.com/images/icon_sets/christmas_surprise_four_in_one/png/128x128/christmas_gift.png',
    price: 39.99
  },
  {
    id: 'c',
    brand: 'Zegna',
    item: 'Brown Leather Moto Jacket',
    imgurl: 'http://a.dryicons.com/images/icon_sets/christmas_surprise_four_in_one/png/128x128/christmas_gift.png',
    price: 2999.99
  }
];

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var context = this;
    axios.get('http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&fts=&limit=25')
    .then(function (response) {
      context.props.setFeed(response.data.products);
    })
    .catch(function (error) {
      console.log('asdfError in sending ajax data ', error);
    });
  }

   render() {
      return (
        <div>
          <h1>Your Recommendations</h1>
          {this.props.feed.map((item) =>
            <FeedItem item={item} key={item.id}/>
          )}
        </div>
      );
   }
}

export default Feed;
