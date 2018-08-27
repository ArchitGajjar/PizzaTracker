module.exports = (socket) => {
  socket.on('start', () => {
    require('../lib/market').run(socket);
  });
};
