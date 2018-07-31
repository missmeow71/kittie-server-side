
exports.up = function(knex, Promise) {
    return knex.schema.createTable('donation-table', (table) => {
    table.increments()
    table.text('fullName')
    table.text('comment')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('donation-table')
};
