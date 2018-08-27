module.exports = (request, reply) => {
  require('../lib/market').run();
  reply();
};
