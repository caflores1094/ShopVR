import React from 'react';
import SharedWishlistItem from './SharedWishlistItem.jsx';
import axios from 'axios';

class SharedWishlistPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var context = this;
    return (
      <div>
        {this.props.friendFound ? 
        <div>
          <div className="shared-wishlist-header">{this.props.friend + "'s"} Wishlist</div>
          <div className="share-wishlist"></div>
          <img className="shared-wishlist-photo" src={this.props.photo}></img>

          {
            this.props.list.map((picObj) => (
                <SharedWishlistItem key={picObj.pic_name} picObj={picObj} getWishList={context.props.getWishList}/>
              )
            )
          }
        </div> : <div className="fourofour">404 not found - you may not have permission for the page you're looking for</div>}
      </div>
    );
  }
}

export default SharedWishlistPage