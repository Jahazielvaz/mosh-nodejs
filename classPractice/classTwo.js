const EventEmitter = require('events');

class ItemBuilder extends EventEmitter {
  car = (title) => {
    console.log(title)
    this.emit('car', [{name: 'Wheel', function: 'To allow the car mobility, as the wheels spin'}, {name: 'Windshield', function: 'To protect the driver from debree, or the wind.'}])
  }

  computer = (title) => {
    console.log(title)
    this.emit('computer', {name: 'computer', purpose: 'to connect the user to the world, and to increase productivity', howItWorks: 'Through ones and zeros'})
  }
}

module.exports = ItemBuilder;
