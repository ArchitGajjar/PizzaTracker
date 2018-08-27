module.exports = (socket) => {
  socket.on('stop', () => {
    require('../lib/market').stop();
  });
  socket.on('disconnect', () => {
    require('../lib/market').stop();
  });
};
