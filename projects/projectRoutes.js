const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
    client: 'sqlite3',
    connection: {
      filename: './data/sprint.sqlite3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (connection, done) =>{
        connection.run("PRAGMA foreign_keys = ON",done)
      }
    }
  }

const db = knex(knexConfig);

module.exports = router;
