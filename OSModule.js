const os = require('os');

const totalMemory = os.totalmem()
const freeMemory = os.freemem()

console.log(totalMemory);
console.log(freeMemory);

//TOTAL/FREE MEMORY IN GBs
console.log('TOTAL/FREE MEMORY IN GBs')
console.log(os.totalmem()/(1024 * 1024 * 1024))
console.log(os.freemem()/(1024 * 1024 * 1024))


// ARCHITECTURE IN BITS
console.log('Architecture in bits')
console.log(os.arch());

// QUANTITY OF CORES (This tells you fine details about each of the cpus in your os.)
console.log('Details about the processing units in the os')
console.log(os.cpus());

// NETWORK INTERFACES
console.log(os.networkInterfaces());

// OS PLATFORM. This tells you what type of operating system, such as mac os, linux, windows etc.
console.log(os.platform());
console.log(os.type());

// UPTIME: Tells you how long your machine has been in operation. If you want to get it in hours, you have to divide by (60 * 60)
console.log('UPTIME in hours');
console.log(os.uptime()/(60 * 60));

// USERINFO: This will give you information about the current user on the machine level, such as root, or any other user.
console.log(`User Info:`);
console.log(os.userInfo());
