
exports.seed = function(knex, Promise) {
  return knex('kittie').del()
    .then(function () {
         return knex('kittie').insert([{
        id: 1,
        imgUrl: 'http://via.placeholder.com/250x250',
        catName: 'Meow Meow',
        comment: 'Pose purrfectly to show my beauty milk the cow so jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn ',
        rating: '10'

        }, {
        id: 2,
        imgUrl: 'http://via.placeholder.com/250x250',
        catName: 'Meow Meow',
        comment: 'Pose purrfectly to show my beauty milk the cow so jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn ',
        rating: '10'

      }, {
        id: 3,
        imgUrl: 'http://via.placeholder.com/250x250',
        catName: 'Meow Meow',
        comment: 'Pose purrfectly to show my beauty milk the cow so jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn ',
        rating: '10'

      }]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE kittie_id_seq RESTART WITH 4;');
    });
};
      
