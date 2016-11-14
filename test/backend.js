var mysql = require('mysql');
var request = require('request');
var expect = require('chai').expect;

describe('Persistant Server', function(){
  var dbConnection;

  before(function(done) {
    user: 'root',
    password: '123',
    database: 'shopvr'
  });

  dbConnection.connect();

  var tableName = 'users';

  dbConnection.query('truncate ' + tablename, done);

  after(function() {
    dbConnection.end();
  });

  it('Should insert a new user into the database', function(done) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/login/facebook'
    })
  });
});