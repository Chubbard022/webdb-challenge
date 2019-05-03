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

router.get("/:id/actions",(req,res)=>{
        const projectID = req.params.id;
    db("action")
        .where({ project_id: projectID })
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})

router.post("/",(req,res)=>{
        const newProject = req.body
    db("project")
    .insert(newProject)
    .then(ids=>{
        const id = ids[0];
        db("project")
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
