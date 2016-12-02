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
          <div className="profile-image">
          </div>

          <div className="shared-wishlist-headline">
            <p className="shared-wishlist-header">
              <img className="shared-wishlist-pic" className="shared-wishlist-photo" src={this.props.photo}></img>
              {this.props.friend + "'s"}<br/>Wishlist
            </p>
          </div>
          <div className="dashboard-border"></div>

          <div className="shared-wishlist-container">
            {
              this.props.list.map((picObj) => (
                  <SharedWishlistItem key={picObj.pic_name} picObj={picObj} getWishList={context.props.getWishList}/>
                )
              )
            }
          </div>
        </div> : <div className="fourofour">404 not found - this page does not exist</div>}
      </div>
    );
  }
}

export default SharedWishlistPage
