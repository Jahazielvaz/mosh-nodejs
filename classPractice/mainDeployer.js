const DisplayPeople = require('./classOne');

const person = new DisplayPeople();

person.on('people', (attributes) => {
  console.log(attributes);
});

person.on('space', (bodies) => {
  console.log(bodies);
});

person.people("Now Introducing:");
person.spaceObjects("Space Objects");
