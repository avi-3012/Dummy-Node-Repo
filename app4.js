// OS module

const os = require('os')

//info about current user
const user = os.userInfo();
console.log(user);

//method returns system uptime
console.log(`the system uptime is: ${os.uptime} seconds`)


const currentOS ={
    name : os.type(),
    release : os.release(),
    total_memory : os.totalmem(),
    free_memory : os.freemem(),
}
console.log(currentOS)