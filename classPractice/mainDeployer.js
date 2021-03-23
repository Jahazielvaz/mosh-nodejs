const DisplayPeople = require('./classOne');

const person = new DisplayPeople();

person.on('people', (attributes) => {
  console.log(attributes);
})

person.people("Now Introducing:")
