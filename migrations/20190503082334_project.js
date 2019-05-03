
exports.up = function(knex) {
    return knex.schema
    .createTable("project",tbl=>{
        tbl.increments()// primary key

        tbl.string("name",50) //name column
            .notNullable()
            .unique()

        tbl.string("description",50) //description column
            .notNullable()
        
        tbl.boolean("flag") //flag column
        
  })
   .createTable("action",tbl=>{
        tbl.increments() //primary key

        tbl.string("description",50) //description column
            .notNullable()

        tbl.string("notes",50) //notes column

        tbl.boolean("flag") //flag column

        
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('project')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('action')
        .dropTableIfExists("project")
};
