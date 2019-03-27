var mysql = require('mysql');

var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_DB'
});

connection.connect(function (err) {
    if (err) return console.log(err);
    console.log('connected as id' + connection.threadId);

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) return console.log(err);
        // Log all results of the SELECT statement
        console.log(res);

        /*
        var i;
        for (i = 0; i < cars.length; i++) { 
            text += cars[i] + "<br>";
        }
        */
        var i;
        for (i = 0; i < res.length; i++) {
            //console.log (res[i])
            console.log(res[i].product_name + " " + res[i].department_name + " " + res[i].price)
            // console.log(res[i].department_name)
            // console.log(res[i].price)

        }
        function start() {
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
            inquirer
              .prompt([
                  {
                    type: "input",
                    message: "\nEnter the ID of the item you want to purchase.",
                    name: "itemId"
                  },
                  {
                    type: "input",
                    message: "How many units do you want to purchase?\n",
                    name: "amount"
                  }
         
              ])
              .then(function(answer) {
                for (var i = 0; i < res.length; i++) {
         
                    chosenItem = res[i].product_name;
                    if (res[i].item_id == answer.itemId && res[i].stock_quantity>=answer.amount) {
                      //chosenAmount= answer.amount;
                      console.log("You want to buy " + parseFloat(answer.amount)+" "+ chosenItem);
                      start();
         
                    }else if(res[i].item_id == answer.itemId && res[i].stock_quantity<<answer.amount){
                        console.log("Sorry we don't have enough "+chosenItem+". There are only "+res[i].stock_quantity+" available.");
                        start();
                   }
         
                  }
              });
          });
         };

        
       


        connection.end();
    });


});



  
// 5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.
