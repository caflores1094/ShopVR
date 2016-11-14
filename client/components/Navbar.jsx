import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
      super(props);
  }
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '310454652686518',
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
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields: 'id, name, email, friends, gender, picture, locale, timezone, location'}, function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';


    });
  }

  loginCallback(response) {
    if (response.status === 'connected') {
      this.testAPI();
    } else if (response.status === 'not_authorized') {
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
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
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
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
      document.getElementById('status').innerHTML = 'You are now logged out.';
    });
  }

  render() {
    return (
       <div>
         <button onClick={this.login.bind(this)}>Facebook Login</button>
         <button onClick={this.logout.bind(this)}>Log Out</button>
         <div id="status"></div>
       </div>
    );
  }
}

export default NavBar;
