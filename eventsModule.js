const EventEmitter = require('events');

const emitter = new EventEmitter();


// EVENT LISTENER: it takes 2 arguments. 1 - the name of the event. cb that determines what you want to do.
emitter.on('doggy', (nameOne, nameTwo, human, err) => {
  if(err){
    throw Error('You Fucked Up!');
  } else {
    console.log(`My first name is ${nameOne}, and my last name is ${nameTwo}`, human);
    // console.log(`I'm`, human)

  };
});

// Executing the event.
emitter.emit('doggy', 'Jazzy', 'Vazquez', {name: 'Jazzy', last: 'Vaz'});
