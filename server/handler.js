let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let path = require('path');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'mysql.freehostia.com',
  user: 'itzsho_itzone',
  password: 'Heshimaherbert@1',
  database: 'itzsho_itzone'
});
try {
	connection.connect(function (error) {
		if(error)
		 console.log(error)
			else
				console.log('connected to my sql')
	})
	
} catch (error) {
	console.log(error)
}

const server = app.listen(8080,()=>{
		
		console.log("app was connected to port 8080");
	})
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;