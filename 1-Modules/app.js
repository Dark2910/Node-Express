/* const moduleHellos = require('./hellos.js'); */
/* const {helloWorld} = require('./hellos.js'); */

/* console.log(moduleHellos.hello('Eduardo')); */
/* console.log(helloWorld()); */

//////////////////////////////////////////////////////////////////

/* console.log(process); */
/* console.log(process.env); */
/* console.log(process.argv); */
/* console.log(process.memoryUsage()); */

//////////////////////////////////////////////////////////////////
/** Module OS */

/* const os = require('os'); */

/* console.log(os.type()); */
/* console.log(os.homedir()); */
/* console.log(os.uptime()); */
/* console.log(os.hostname()); */
/* console.log(os.userInfo()); */

//////////////////////////////////////////////////////////////////
/** Module Timers */

/* const timeHandler = (who) => {
    console.log(`Hello ${who}!!!`);
} */
/* setTimeout(timeHandler, 1000, 'handler'); */

/* console.log('Before of setImmediate()');
setImmediate(timeHandler, 'handler');
console.log('After of setImmediate()'); */

/* const addition = (a, b) => {
    console.log(a + b);
};
setInterval(addition, 1500, ...[2, 3]); */

//////////////////////////////////////////////////////////////////
/** Module File System (fs) */

/* import fs from 'node:fs'; */
const fs = require('fs');

/* fs.readFile('./text.txt', 'UTF-8', (err, data) => {
    try{
        if(err){
            throw err;
        }
        console.log(data);
    }catch(error){
        console.log(error);
    }
}) */

const data = fs.readFileSync('./text.txt', 'UTF-8');
console.log(data);


/* fs.rename('./text.txt', './texT.txt', (err) => {
    try {
        if(err){
            throw err;
        }
        console.log('Change successfully');
    } catch (error) {
        console.log(error);
    }
}) */

fs.renameSync('./texT.txt', './text.txt');


/* fs.appendFile('./text.txt', 'Hello :D', (err) => {
    try {
        if(err){
            throw err;
        }
        console.log('Append successfully');
    } catch (error) {
        console.log(error);
    }
}) */
fs.appendFileSync('./text.txt', 'Hello :D');


/* fs.writeFile('./text.txt', 'Hello Eduardo :D', (err) => {
    try {
        if(err){
            throw err;
        }
        console.log('Content replacement successfully');
    } catch (error) {
        console.log(error);
    }
}) */
fs.writeFileSync('./text.txt', 'Hello Eduardo :D');

/* fs.unlink('./text_copy.txt', (err) => {
    try {
        if(err){
            throw err;
        }
        console.log('Content unlinked successfully');
    } catch (error) {
        console.log(error);
    }
}) */
fs.unlinkSync('./text_copy.txt');