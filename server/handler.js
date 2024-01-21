let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let path = require('path');
let connection =  mysql.createPool({
	// host : 'mysql.freehostia.com',
	host : 'localhost',
	// user : 'itzsho_itzone',
	user : 'root',
	// password : 'Heshimaherbert@1',
	password : '',
	// database : 'itzsho_itzone',
	database : 'itzone',
});
connection.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }

    console.log('Successfully connected to database with threadId:', connection.threadId);
});
const server = app.listen(8080,()=>{
		
		console.log("app was connected to port 8080");
	})
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;