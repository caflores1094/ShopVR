import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
      super(props);
  }
   render() {
      return (
         <div><a href={this.props.item.clickUrl}>
            <img src={this.props.item.image.sizes.IPhoneSmall.url} />
            <p>{this.props.item.name}</p></a>
            <p>{this.props.item.currency} {this.props.item.price}</p>
            <p>{this.props.item.categories[0].name}</p>
            <p>{this.props.item.retailer.name}</p>
         </div>
      );
   }
}

export default FeedItem;
