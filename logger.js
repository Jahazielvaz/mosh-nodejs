const EventEmitter = require('events');

let url = 'https//:wdkhwkdh';

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    this.emit('messageLogged', {id: 3323, url: 'https://sdkjhs'})
  };
}

module.exports = Logger;
