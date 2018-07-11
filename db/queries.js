const knex = require('./knex');

module.exports = {
    getAll() {
      return knex('kittie');  
    },
    create(kittie) {
      return knex('kittie').insert(kittie, '*');
    },
    update(id, kittie) {
      return knex('kittie').where('id', id).update(kittie, '*');
    },
    delete(id) {
      return knex('kittie').where('id', id).del()
    }
}