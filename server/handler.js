let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let path = require('path');
let connection =  mysql.createPool({
 	host : 'mysql.freehostia.com',
	user : 'itzsho_itzone',
	password : 'Heshimaherbert@1',
	database : 'itzsho_itzone'
});

const server = app.listen(8080,()=>{
		
		console.log("app was connected to port 8080");
	})
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;
