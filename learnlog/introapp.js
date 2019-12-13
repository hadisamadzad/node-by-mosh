 //// ** Intro
//function sayHello(name) {
//    console.log('Hello ' + name);
//};
//
//sayHello('Hadi');
//console.log(module); 


//// ** Modules
//var logger = require('./logger');
//logger.Print("Hi, I'm called from logger module!");


//// ** Built-In Modules
//// Important built-in modules: os fs http path
//
//// fs
//const fs = require('fs');
//fs.readdir("./", function(err, files){
//    if(err) console.log(`Encountered an Error: ${err}`);
//    else console.log(`Results: ${files}`);
//})
//// path
//const path = require('path');
//var dirName = path.parse(__dirname);
//console.log(dirName);
//
//// os
// const os = require('os');
// var totalMemory = os.totalmem;
// var freeMemory = os.freemem;
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
// console.log(`More Info: ${os.hostname}`);
//
//// http
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.write("Hi Node App");
//         res.end();
//     }
// });
// server.listen(3000);
// console.log("Listening on Port 3000");