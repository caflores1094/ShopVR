module.exports = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DATABASE_HOST || 'localhost',
    database: 'shopvr',
    user: 'newuser',
    password: 'password',
    port: 3306
  }
};
