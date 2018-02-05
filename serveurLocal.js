"use strict";
/* importation du module «fs» (file system) */
const fs = require("fs");
const http = require("http"); 
http.createServer((request, response) => 
{ 
 console.log('branchement sur le port 3000')
 response.writeHead(200, {"Content-Type": "text/plain; charset=UTF-8"});
 response.write(fs.readFileSync('Provinces.json', 'utf8')); 
 response.end(); 
}).listen(3000);