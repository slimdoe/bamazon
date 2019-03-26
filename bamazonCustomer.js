var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_DB'
});

connect.connect(function (err) {
    if (err) throw err;
    console.log('connected as id' + connect.threadId);
    connect.end();
});
