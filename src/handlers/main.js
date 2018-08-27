var popGen = require('../lib/popGen'),
  dataStore = require('../lib/dataStore');

module.exports = (request, reply) => {
  const promises = [
    popGen.getPopularSlices(),
    popGen.getMostPopular(),
    popGen.getNewestSlice(),
    popGen.getMostImproved(),
    dataStore.getPizzas()
  ]

  Promise.all(promises)
  .then((results) => {
    const context = {};
    context.popSlices = results[0];
    context.mostPopular = results[1];
    context.newestSlice = results[2];
    context.mostImproved = results[3];
    context.pizzas = results[4];

    return reply.view('index', context);
  })
  .catch((err)=> {
    console.error(`ERROR : ${JSON.stringify(err)}`);
  });
};
