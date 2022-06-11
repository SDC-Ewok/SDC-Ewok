require('dotenv').config();
const { Pool } = require ('pg');

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.POSTFRESUSER,
  port: process.env.POSTGRESPORT,
  password: process.env.POSTGRESPASS,
  database: process.env.DATABASE
});

pool.connect()
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => console.log('error while connecting database', err));

module.exports = pool;