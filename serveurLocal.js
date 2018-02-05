'use strict';

let fs = require('fs');
let provincesJSON = JSON.parse(fs.readFileSync('Provinces.json'));
/* 
permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */

const contenu_objet_json=(o)=>{
   let trace = '<table><tr><th><h3>Acronymes</h3></th><th><h3>Provinces</h3></th></tr>';
   for (let p in o) { 
     trace +='<tr><td>'+ p + '</td><td>' + o[p] + '</td></tr>'; 
   } 
   trace += '</table>'
   return trace;
   }

//serveur   

const http = require("http");
let server = http.createServer((request, response) => {

response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
 response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
 response.write('<!DOCTYPE "html">');
 response.write('<html>');
 response.write('<head>');
 response.write('</head>');
 response.write('<body>');
 response.write(contenu_objet_json(provincesJSON));
 response.write('</body>');
 response.write('</html>');
 response.end();

}).listen(3000)