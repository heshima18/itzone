let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let path = require('path');
require('dotenv').config();
let connection =  mysql.createPool({
	host : 'mysql.freehostia.com',
	// host : 'localhost',
	user : 'itzsho_itzone',
	// user : 'root',
	password : 'Heshimaherbert@1',
	// password : '',
	database : 'itzsho_itzone',
	// database : 'itzone',
});
connection.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        return;
    }

    console.log('Successfully connected to database with threadId:', connection.threadId);
});
const server = app.listen(process.env.PORT ,()=>{
	console.log("app was connected to port: ",process.env.PORT);
})
const session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
}));
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;
