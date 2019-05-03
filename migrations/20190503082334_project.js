
exports.up = function(knex) {
    return knex.schema
    .createTable("project",tbl=>{
        tbl.increments()// primary key

        tbl.string("name",20) //name column
            .notNullable()
            .unique()

        tbl.string("description",20) //description column
            .notNullable()
        
        tbl.boolean("flag") //flag column
            .notNullable()
        
  })
   .createTable("action",tbl=>{
        tbl.increments() //primary key

        tbl.string("description",20) //description column
            .notNullable()

        tbl.string("notes",20) //notes column

        tbl.boolean("flag") //flag column
            .notNullable()

        
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
