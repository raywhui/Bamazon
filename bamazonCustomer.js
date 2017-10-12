var mysql = require('mysql');
var inquirer = require('inquirer');
var products = [];

var connection = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'7seas1000suns',
	database:'bamazon'
});

connection.query('SELECT * FROM products', function(err,res){
	if (err) throw err;
	for (var i = 0; i < res.length; i++) {
		// products.push('ID: ' + res[i].item_id + '| Item: ' + res[i].product_name + " | Price: $" + res[i].price);
		console.log('ID: ' + res[i].item_id + ' | Item: ' + res[i].product_name + " | Price: $" + res[i].price);
		// console.log(products);
	};
	//line seperator, inquirer just loops 
	// products.push(new inquirer.Separator());

	//NEED THIS
	idChoice();
});

function idChoice(){
	inquirer.prompt([
		{
			type:'input',
			name:'idChoice',
			message:'Input ID of item you wish to purchase:',
		},
		{
			type:'input',
			name:'unitChoice',
			message:'Input amount of units you wish to purchase:',
		}

	]).then(function(answers){
		// console.log('yay here are the answers:', answers);
		// console.log('sweg', answers.idChoice);
		// console.log('sweg', answers.unitChoice);

		quantityCheck(answers.idChoice, answers.unitChoice);


		// connection.end();


	});
};

function quantityCheck(id, units){
	connection.query('SELECT * FROM products', function(err,res){
		if (err) throw err;

		// res[id-1]===undefined needs to be first, otherwise errors because cannot compare undefined with an integer
		if(res[id-1] === undefined){
			console.log("That's not one of the choices! Do it again!");
			idChoice();
		}else if(units > res[id-1].stock_quantity){
			console.log('Why do you need so many?? Please reinput values again.');
			idChoice();
		}else{
			updateProduct(id, res[id-1].stock_quantity ,units, res[id-1].product_name, res[id-1].price);
		}
	});
};

function updateProduct(id,initialUnits,units,whatYouBought,price){
	connection.query('UPDATE products SET ? WHERE ?',
		[
			{
				stock_quantity: initialUnits - units
			},
			{
				item_id: id
			}
		],
	 function(err,res){
	 	console.log('Thank you for your patronage. Here is your',units,'unit(s) of',whatYouBought + '.');
	 	console.log('=======================================');
	 	console.log("That'll be $" + units*price);
	 	console.log(res.affectedRows + ' products updated.');
	 	connection.end();
	 });
}







// connection.connect(function(err){
// 	if (err) throw err;
// 	console.log('Connected to', connection.threadID);
// 	connection.end();
// });