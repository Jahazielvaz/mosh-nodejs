const EventEmitter = require('events');

class Logger extends EventEmitter {
   log = (message) => {
    // Send HTTP Request
    console.log(message);

    // Raise An Event
    this.emit('messageLogged', {id: 1, url: 'https://lksdj'})
  };
}

module.exports = Logger;
