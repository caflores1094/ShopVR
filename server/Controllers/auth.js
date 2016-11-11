const graph = require('fbgraph');
const conf = require('../config');
const db = require('../index');

module.exports = {
//login
  login: {
  	//api get request to endpoint, get response data
 	var response = null;
 	$.ajax({
 	  type: 'GET',
 	  url: 'auth/login',
 	  success: function(data) {
 	  	console.log(data);
 	  	response = data;
 	  }
 	}});
    //If the person is logged into Facebook and your app, redirect them to your app's logged in experience.
    response.
    //If the person isn't logged into your app, or isn't logged into Facebook, prompt them with the Login dialog with FB.login() or show them the Login Button.

  }
 	
//logout



}