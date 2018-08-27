var dataStore = require('../lib/dataStore');

module.exports = (request, reply) => {
  dataStore.getPizzas((err, data) => {
    if (err) {
      console.error(err);
      reply(err);
    } else {
      reply(data);
    }
  });
};
