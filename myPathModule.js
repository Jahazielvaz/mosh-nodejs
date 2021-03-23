

 const path = require('path');

 file = path.resolve("sample.txt");

 // file =  'sample.txt';

 absoluteFile = path.isAbsolute(file);

// const absoluteChecker = () => {
//
//   if(absoluteFile === true){
//     console.log('Yay. The path is absolute!')
//   } else {
//     throw Error('Path is not absolute');
//   }
// }

const returnPath = () => {
  console.log(file)
}

// module.exports = absoluteChecker;

let superFullFile = path.join('/mypuppy', file);
const fileParser = path.parse('./sample.txt');

module.exports.superFullFile = superFullFile;
module.exports.fileParser = fileParser;
