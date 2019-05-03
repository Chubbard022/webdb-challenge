
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: "project1", description: "project one contains stuff", flag: false},
        { name: "project2", description: "project two contains stuff", flag: false},
        { name: "project3", description: "project three contains stuff", flag: false},
      ]);
    });
};
