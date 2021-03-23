const EventEmitter = require('events');

class DisplayPeople extends EventEmitter{
  people = (person) => {
    console.log(person);

    this.emit('people', {name: "Jaz", last: "Vaz", hobbies: "Coding/Hacking"});
  };
};

module.exports = DisplayPeople;
