import React from 'react';
import FeedItem from './FeedItem.jsx';

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
   render() {
      return (
        <div>
          <h1>Your Recommendations</h1>
          {items.map((item) =>
            <FeedItem item={item} key={item.id}/>
          )}
        </div>
      );
   }
}

export default Feed;
