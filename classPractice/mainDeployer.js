const DisplayPeople = require('./classOne');
const ItemBuilder = require('./classTwo');
const Band = require('./classThree');

const person = new DisplayPeople();

person.on('people', (attributes) => {
  console.log(attributes);
});

person.on('space', (bodies) => {
  console.log(bodies);
});

person.people("Now Introducing:");
person.spaceObjects("Space Objects");


const itemBuilder = new ItemBuilder();

itemBuilder.on('car', (parts) => {
  console.log(parts);
});

itemBuilder.on('computer', (parts) => {
  console.log(parts);
});

itemBuilder.car("Car:");
itemBuilder.computer('Computer:');



const bands = new Band();

bands.on("bands", (name, details) => {
  console.log(name, details)
});

bands.bandAttributes("Pink Floyd")
