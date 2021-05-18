const os = require('os');//it is a built in module therefor no need to './'

//Information about current User
const user = os.userInfo();
console.log("The user information ...", user);
//  {
//    uid: -1,
//   gid: -1,
//   username: 'KIIT',
//   homedir: 'C:\\Users\\KIIT',
//   shell: null
// }

//information about how long the system is being running

const sys_time = os.uptime();
console.log(`The System is running for ${sys_time} seconds.`);
//The System is running for 309251 seconds.

//information
const current_os = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
};

console.log(current_os);