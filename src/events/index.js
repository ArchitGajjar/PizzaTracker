module.exports = {
  register: function (io) {
    io.on('connection', (socket) => {
      require('./start')(socket);
      require('./stop')(socket);
    });
  }
};
