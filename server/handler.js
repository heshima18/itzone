let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let connection = mysql.createConnection({
	host : 'sql306.byetcluster.com',
	user : 'epiz_33949774',
	password : 'yI4ld3lcICZu2e',
	database : 'epiz_33949774_itzone'
})
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
