let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'itzone'
})
try {
	connection.connect(function (error) {
		if(error)
		 console.log('an error occured')
			else
				console.log('connected to my sql')
	})
	
} catch (error) {
	console.log('an error occured')
}

const server = app.listen(8080,()=>{
		
		console.log("app was connected to port 8080");
	})
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;