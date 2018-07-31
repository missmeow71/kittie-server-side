exports.seed = function(knex, Promise) {
  return knex('donation-table').del()
    .then(function () {
      return knex('donation-table').insert([{
        id: 1,
        increment: '',
        fullname: 'Fancy Feast',
        comment: 'Happy to donate to such a great cause!'

      },{
        id: 2,
        increment: '',
        fullname: 'Fancy Feast',
        comment: 'Happy to donate to such a great cause!'

      },{
        id: 3,
           increment: '',
           fullname: 'Fancy Feast',
           comment: 'Happy to donate to such a great cause!'

    }]);
    
    }).then(() => {
      return knex.raw('ALTER SEQUENCE kittie_id_seq RESTART WITH 4;');
    });
};
