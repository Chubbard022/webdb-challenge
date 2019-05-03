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
  db("action")
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
})

router.get("/:id",(req,res)=>{
  const actionId = req.params.id

  db("action")
    .where({id: actionId})
    .first()
    .then(response=>{
      res.status(200).json(response)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
})

router.post("/",(req,res)=>{
  const newAction = req.body;

  db("action")
  .insert(newAction)
  .then(ids=>{
    const id = ids[0]
    db("action")
      .where({id})
      .first()
      .then(response=>{
        res.status(201).json(response)
      })
  }).catch(err=>{
    res.status(500).json(err)
  })
})

module.exports = router;