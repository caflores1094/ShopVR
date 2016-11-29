import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Profile from './Profile.jsx';

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

 //the below blocks are for social network sharing
  const FacebookIcon = generateShareIcon('facebook');
  const {
    FacebookShareButton,
  } = ShareButtons;

  const {
    FacebookShareCount,
  } = ShareCounts;


class ShareLink extends React.Component {
  constructor(props) {
  	super(props)
  }

  handleClick(event) {
  	console.log('event', event);
    event.target.select();
  }

  render() {
    
    return (
      <div>
	      <div className="share-link-bar">
	        <div className="share-link-text">
	        Copy and paste to share your wishlist items with your friends
	        </div>
	        <input className="share-link" onClick={this.handleClick.bind(this)} type="text" value={"54.201.209.146/" + this.props.userid}/>
	      	<div className="share-container">
	            <FacebookShareButton
	            url={"https://54.201.209.146/" + this.props.userid}
	            title={this.props.username}
	            className="social-icon">
	              <FacebookIcon
	                size={20}
	                round={false} />
	            </FacebookShareButton>
            </div>
	      </div>
	  </div>
    );
  }
}

export default ShareLink;