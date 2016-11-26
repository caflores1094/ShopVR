import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Profile from './Profile.jsx';

class ShareLink extends React.Component {
  constructor(props) {
  	super(props)
  }

  componentDidMount() {
  	console.log('this.props', this.props);
  }

  render() {
    
    return (
      <div>
	      <div className="share-link-bar">
	        <div className="share-link-text">
	        Copy and paste to share your wishlist items with your friends
	        </div>
	        <input className="share-link" type="text" defaultValue={"https://54.201.209.146/profile/" + this.props.userid}/>
	      </div>
	  </div>
    );
  }
}

export default ShareLink;