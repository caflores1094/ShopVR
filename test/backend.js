var mysql = require('mysql');
var request = require('request');

describe('Persistent Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'newuser',
      password: 'password',
      database: 'shopvr'
    });
    dbConnection.connect();


    var tablename = 'users';
    
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert users into DB', function(done) {
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
      var queryString = 'SELECT * FROM users';
      var queryArgs = [];

      dbConnection.query(queryString, queryArgs, function(err, results) {
        console.log('result', results);
        expect(results.length).to.equal(1);
        // expect(results[0].name).to.equal('Bob Bob');
        done();
      });
    });
  });
});
