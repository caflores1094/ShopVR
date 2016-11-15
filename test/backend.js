var mysql = require('mysql');
var request = require('request');
var expect = require('chai').expect;
var supertest = require('supertest');
var should = require('should');

describe('Server', function() {
  var server = supertest.agent("http://localhost:3000");
  describe('Serving assets', function(done) {
    it('Should get /', function() {
      server
      .get('/')
      .expect(200, done);
    });
    it('Should get /profile', function() {
      server
      .get('/profile')
      .expect(200, done);
    });
    it('Should get /view', function() {
      server
      .get('/view')
      .expect(200, done);
    });
    it('Should get /vr', function() {
      server
      .get('/vr')
      .expect(200, done);
    });
    it('Should not get /shop', function() {
      server
      .get('/shop')
      .expect(404, done);
    });
  });
});

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
    describe('Should post to database from endpoints', function(done) {
      var dbConnection;

      beforeEach(function() {
        dbConnection = mysql.createConnection({
          user: 'newuser',
          password: 'password',
          database: 'shopvr'
        });
        dbConnection.connect();
      });

      afterEach(function() {
        console.log('ending connection');
        dbConnection.end();
      });
      
      it('Should insert into users table', function(done) {
        var sample = {
          name: 'Bob Bob',
          email: 'bob@bob.com',
          gender: 'Male',
          locale: 'en_US',
          timezone: -8,
          friends: 400,
          fb_id: '1239281888',
          profile_pic: 'bob.png'
        };
        dbConnection.query('INSERT INTO users SET ?', sample, function(err, results) {
          if (err) {
            console.log('Error inserting', err);
          }
          expect(results.affectedRows).to.equal(1);
          done();
        });

      });
      it('Should have a record of the insert', function(done) {
        dbConnection.query('SELECT * FROM users', function(err, results) {
          console.log('result', results);
          expect(results.length).to.equal(1);
          expect(results[0].name).to.equal('Bob Bob');
          done();
        });          
      });
    });
  });
});
