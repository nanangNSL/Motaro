const { Client } = require("pg");

const Pool = require("pg").Pool;
require("dotenv").config();

let pool;
if (process.env.MODE_ENV !== "production") {
  pool = new Client({
    connectionString: process.env.HEROKU_DB,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new Pool({
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    port: process.env.DBPORT,
  });
}

pool.connect(function (err) {
  if (err) throw err;
  console.log("Database connected 🚀!");
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};
