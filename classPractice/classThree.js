const EventEmitter = require('events');

class Bands extends EventEmitter {
  bandAttributes = (name) => {
    this.emit('bands', name, {name: "Pink Floyd", style: "Rock", specialty: "Solos"})
  }
}

module.exports = Bands;
