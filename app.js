// const EventEmitter = require('events');
const http = require('http');


const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('Welcome To My Server!');
    res.end();
  };

  if(req.url === '/api/array'){
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});


server.listen(3000);

console.log('Listening to port 3000!');
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

// const Logger = require('./eventEmitterClass');
// const logger = new Logger();
//
// logger.on('messageLogged', (arg) => {
//   console.log('Listener Called', arg);
// });
//
// logger.log('My super secret message');
