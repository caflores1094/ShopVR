import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
      super(props);
  }
  componentWillMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '315282285537088',
        cookie     : true,  // enable cookies to allow the server to access
                          // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use version 2.1
      });

      FB.getLoginStatus(function(response) {
        this.refreshCallback(response);
      }.bind(this));
    }.bind(this);

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  testAPI() {
    var context = this;
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields: 'id, name, email, friends, gender, picture, locale, timezone, location'}, function(response) {
      console.log('Successful login for: ' + response.name);
      //get higher resolution picture
      FB.api("/me/picture?width=320&height=320", function(picResponse) {
        response.profile_pic = picResponse.data.url;
        console.log(response, 'response before posting, after getting larger pic');
        axios.post('/login/facebook', response)
          .then(function (response) {
            console.log(response);
            context.props.setUser(response.data[0]);
          })
          .catch(function (error) {
            console.log('Error in sending ajax data');
          });
      }); 
    });

     
  }

  loginCallback(response) {
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      console.log('Please log into this app.');
    } else {
      FB.login(function(response) {
        if (response.authResponse) {
         this.testAPI();
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
      }.bind(this));
    }
  }

  refreshCallback(response) {
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      console.log('Please log into this app.');
    }
  }

  login() {
    FB.getLoginStatus(function(response) {
      this.loginCallback(response);
    }.bind(this));
  }

  logout() {
    FB.logout(function(response) {
      console.log('logged out', response);
      window.location.assign(window.location.pathname);
    });
  }


  render() {
    if (this.props.user.hasOwnProperty('name') && window.location.pathname !== '/vr') {
      return (
        <div className="header">
          <div className="navbar">Shop
           <br/>
           <p className="color">VR</p>
          </div>
          <div className="buttons">
            <button className="navbar-button" onClick={this.logout.bind(this)}>Logout</button>
            <button className="navbar-button" onClick={() => browserHistory.push('profile')}>Profile</button>
            <button className="navbar-button" onClick={() => browserHistory.push('/')}>Feed</button>
          </div>
        </div>
      );
    } else if (this.props.user.hasOwnProperty('name') && window.location.pathname === '/vr') {
      return (
         <div>
           <button onClick={this.logout.bind(this)}>Log Out</button>
         </div>
      );
    } else {
      return (
        <div className="header">
          <div className="navbar">Shop
            <br/>
            <p className="color">VR</p>
          </div>
          <button className="navbar-button" onClick={this.login.bind(this)}>Login</button>
          <button className="navbar-button" onClick={this.login.bind(this)}>Signup</button>
        </div>
      );
    }
  }
}

export default NavBar;
