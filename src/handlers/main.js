var popGen = require('../lib/popGen'),
  dataStore = require('../lib/dataStore');

module.exports = (request, reply) => {
  var context = {};

  popGen.getPopularSlices((err, popSlices) => {
    context.popSlices = popSlices;

    popGen.getMostPopular((err, mostPopular) => {
      context.mostPopular = mostPopular;

      popGen.getNewestSlice((err, newestSlice) => {
        context.newestSlice = newestSlice;

        popGen.getMostImproved((err, mostImproved) => {
          context.mostImproved = mostImproved;

          dataStore.getPizzas((err, pizzas) => {
            context.pizzas = pizzas;

            return reply.view('index', context);
          });
        });
      });
    });
  });
};
