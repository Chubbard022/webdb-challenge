
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { description: "project1 subject1 description", notes: "extra notes on project1",project_id: 1, flag: false},
        { description: "project1 subject2 description", notes: "extra notes on project1",project_id: 1, flag: false},
        { description: "project3 subject1 description", notes: "extra notes on project3",project_id: 3, flag: false},
      ]);
    });
};
