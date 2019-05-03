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

router.get("/",(req,res)=>{
    db("project")
        .then(response=>{
            console.log("+++++++++++",response)
                res.status(200).json(response)
        })
        .catch(err=>{
            console.log("ERRR::::::",err)
        })
})


module.exports = router;
