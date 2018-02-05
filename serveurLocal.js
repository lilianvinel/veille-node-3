'use strict';

let fs = require('fs');
let provincesJSON = JSON.parse(fs.readFileSync('Provinces.json'));
/* 
permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */  

const http = require("http");
let server = http.createServer((request, response) => {

response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
 response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
 response.write('<!DOCTYPE "html">');
 response.write('<html>');
 response.write('<head>');
 response.write('</head>');
 response.write('<body>');
 response.write('</body>');
 response.write('</html>');
 response.end();

}).listen(3000)