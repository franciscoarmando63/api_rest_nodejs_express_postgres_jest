const pgp = require('pg-promise')();

const db = pgp({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'apiBlogNodejsExpress'
});

module.exports = db;
