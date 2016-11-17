import React from 'react';
import Feed from './Dash/Feed.jsx';
import QueryBox from './Dash/QueryBox.jsx';
import Social from './Dash/Social.jsx';
import ImageUpload from './Dash/ImageUpload.jsx';

class Wishlist extends React.Component {
  constructor(props) {
      super(props);
  }

   render() {
    console.log(this.props.list[0])
      return (
        <div>
          {
            this.props.list.map((picObj) => (
              <div key={picObj.pic_name}>
                <a href={picObj.url}>
                  <img src={picObj.pic_name} />
                  <p>{picObj.item_name}</p>
                </a>
                <p>${picObj.price}</p>
              </div>
              )
            )
          }
        </div>
      );
   }
}

// div><a href={this.props.item.clickUrl}>
//             <img src={this.props.item.image.sizes.IPhoneSmall.url} />
//             <p>{this.props.item.name}</p></a>
//             <button onClick={this.like.bind(this)}>Heart!</button>
            // <p>{this.props.item.currency} {this.props.item.price}</p>
            // <p>{this.props.item.categories[0].name}</p>
            // <p>{this.props.item.retailer.name}</p>
//          </div>

export default Wishlist;
