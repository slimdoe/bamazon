var mysql = require ('mysql');
 
 var connect = mysql.createConnection({
     host: 'localhost',
     port:3306,
     user:'root',
     password: 'password',
     database:'bamazonCustomer'
 });
connect.connect(function(err){
    if (err) throw err;
    console.log( 'connected as id' + connect.threadId);
    connect.end ();
});
