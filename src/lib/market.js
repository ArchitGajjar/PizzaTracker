var quoteManager = require('./quoteManager');

var runInterval;

module.exports = {
  run: (socket) => {
    runInterval = setInterval(() => {
      quoteManager.updateQuotes()
      .then((newData) => {
        socket.emit('new_data', JSON.stringify(newData));
      })
      .catch((err)=> {
        console.error(`ERRPR : ${JSON.stringify(err)}`);
      });
    }, 1000);
  },

  stop: function () {
    clearInterval(runInterval);
  }
};
