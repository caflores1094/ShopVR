import React from 'react';
import FeedItem from './FeedItem.jsx';

class Feed extends React.Component {
   render() {
      return (
        <div>
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </div>
      );
   }
}

export default Feed;
