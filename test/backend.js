var mysql = require('mysql');
var request = require('request');

describe('Database', function() {
  describe('DB connection', function() {
    it('Should connect to the database', function(done) {
      var connection = mysql.createConnection({
        user: 'newuser',
        password: 'password',
        database: 'shopvr'
      });
      connection.connect(done);
    });
  });
});

describe('Server', function() {
  describe('Connect to server', function() {
    it('Should connect to server', function(done) {
      
    })
  });
});

// describe('Persistent Server', function() {
//   var dbConnection;

//   before(function(done) {
//     dbConnection = mysql.createConnection({
//       user: 'newuser',
//       password: 'password',
//       database: 'shopvr'
//     });
//     dbConnection.connect();

//     var tablename = 'users';
    
//     // dbConnection.query('truncate ' + tablename, done);
//   });

//   after(function() {
//     console.log('ending connection');
//     dbConnection.end();
//   });

  // it('Should insert users into DB', function(done) {
  //   console.log('trying to insert here');
  //   request({
  //     method: 'POST',
  //     uri: 'http://localhost:3000/login/facebook',
  //     json: {
  //       name: 'Bob Bob',
  //       email: 'bob@bob.com',
  //       gender: 'Male',
  //       locale: 'en_US',
  //       timezone: -8,
  //       friends: { summary: { total_count: 400 } },
  //       id: '1239281888',
  //       picture: { data: { url: 'bob.png' } }
  //     }
  //   }, function() {
  //     var queryString = 'SELECT * FROM users';
  //     var queryArgs = [];

  //     dbConnection.query(queryString, queryArgs, function(err, results) {
  //       console.log('result', results);
  //       expect(results.length).to.equal(1);
  //       // expect(results[0].name).to.equal('Bob Bob');
  //       done();
  //     });
  //   });
  // });
// });
