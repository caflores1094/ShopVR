import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
      super(props);
  }
   render() {
      return (
         <div>
            <img src={this.props.item.imgurl} />
            <p>{this.props.item.brand}</p>
            <p>{this.props.item.item}</p>
            <p>{this.props.item.price}</p>
         </div>
      );
   }
}

export default FeedItem;
