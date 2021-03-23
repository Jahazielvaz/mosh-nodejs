const EventEmitter = require('events');
//
// const Logger = require('./logger');
// const logger = new Logger();
//
// logger.on('messageLogged', (arg) => {
//   console.log('Listener Called', arg);
// });
//
// logger.log('message')

// const fileCreator = require('./fileCreatorModule');
//
// fileCreator();

// const superFullFile = require('./myPathModule');
// const fileParser = require('./myPathModule');
//
// console.log(superFullFile);
// console.log(fileParser);

const Logger = require('./eventEmitterClass');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener Called', arg);
});

logger.log('My super secret message');
