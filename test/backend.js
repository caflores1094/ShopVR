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
      uri: 'http://localhost:3000/login/facebook',
      json: {
        name: 'Bob Bob',
        email: 'bob@bob.com',
        gender: 'Male',
        locale: 'en_US',
        timezone: -8,
        friends: { summary: { total_count: 400 } },
        id: '1239281888',
        picture: { data: { url: 'bob.png' } }
      }
    }, function() {
      var queryStr = 'SELECT * FROM users';
      var queryArgs = [];

      dbConnection.query(queryStr, queryArgs, function(err, results) {
        expect(results.length).to.equal.(1);
        expect(results[0].name).to.equal.('Bob Bob');
        done();
      });
    });
  });
});