const EventEmitter = require('events');

class DisplayPeople extends EventEmitter{
  people = (person) => {
    console.log(person);

    this.emit('people', {name: "Jaz", last: "Vaz", hobbies: "Coding/Hacking"});
  };

  spaceObjects = (space) => {
    console.log(space)
    this.emit('space', [{name: 'Black Hole', description: "One of the most frightening space bodies, since not even light can escape it."}, {name: 'Jupiter', type: "Planet"}])
  }
};

module.exports = DisplayPeople;
