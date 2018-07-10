
exports.up = function(knex, Promise) {
  return knex.schema.createTable('kittie', (table) => {
    table.increments()
    table.text('imgUrl')
    table.text('catName')
    table.text('comment')
    table.float('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kittie')
};
