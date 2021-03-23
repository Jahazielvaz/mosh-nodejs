const fs = require('fs');

// const fileCreator = () => {
//   fs.readFile('./sample.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//
//     console.log(data)
//     console.log(__filename)
//     console.log(__dirname)
//   })
// }
//
//
// module.exports = fileCreator;

// const myDir = fs.readdirSync('./');
//
// console.log(fs.readdirSync('./'));

const myFiles = fs.readdir('./', (err, files) => {
  console.log(files)
})
c
