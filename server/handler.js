let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let path = require('path');

let connection = mysql.createConnection({
	host : 'sql.freedb.tech',
	user : 'freedb_itzone',
	password : 'X6$Xn#JnTEW7z@w',
	database : 'freedb_itzone',
	insecureAuth: true,
  	multipleStatements: true,
  	max_allowed_packet: 64 * 1024 * 1024,
})
let v = ()=> {connection.connect(function (error) {
	if(error)
		console.log(error)
	else
		console.log('connected to my sql')
})
}
v()

connection.on('error', function(err) {
  console.error('Database connection error:', err.stack);
	v()
	
});
const server = app.listen(8080,()=>{
		
		console.log("app was connected to port 8080");
	})
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;
