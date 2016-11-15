import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
      super(props);
  }
   render() {
      return (
         <div>
            <img src={this.props.item.image.sizes.IPhoneSmall.url} />
            <p>{this.props.item.name}</p>
            <p>{this.props.item.retailer.name} - {this.props.item.price}</p>
         </div>
      );
   }
}

export default FeedItem;
