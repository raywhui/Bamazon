var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

var connection= mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'bamazon'
});

supervisorFunction();

function supervisorFunction(){
	inquirer.prompt([
		{
			type:'list',
			name:'supervisor',
			message:'Select a supervisorial option:',
			choices: [
   			'View Product Sales by Department',
   			'Create New Department'
			]
		}
	]).then(function(answers){
		if (answers.supervisor === 'View Product Sales by Department'){
			viewDepartments();
		}else{
			console.log('\nNO INSTRUCTIONS FOR CREATE NEW DEPARTMENT YAY!\n');
			supervisorFunction();
		}
	});
};

function viewDepartments(){
	console.log('\n');
	//query will cause all department names to be ordered, so only need to account for difference in names
	connection.query(
		'SELECT * FROM products LEFT JOIN departments ON products.department_name = departments.department_name',
		function(err,res){
			var tableArray = [];
			var productSalesTotal = 0;
			for (var i = 0; i < res.length; i++){
				//initial one, prevents next else if from erroring due to undefined
				if(i === 0){
					productSalesTotal += res[i].product_sales;
				
				//checks if previous and next department_name are the same
				}else if (res[i].department_name === res[i-1].department_name && res[i].department_name === res[i+1].department_name){
					productSalesTotal += res[i].product_sales;

				//checks if last entry of department_name before changing to next department_name
				}else if (res[i].department_name === res[i-1].department_name && res[i].department_id !== res[i+1].department_id){
					productSalesTotal += res[i].product_sales;

					tableArray.push({
						department_id: res[i-1].department_id,
						department_name: res[i-1].department_name,
						over_head_costs: res[i-1].over_head_costs,
						product_sales: productSalesTotal,
						total_profit: productSalesTotal - parseInt(res[i-1].over_head_costs)
					});

					productSalesTotal = 0;

				//checks if only entry with particular department_name
				}else if (res[i].department_name !== res[i-1].department_name && res[0].department_id !== res[i-1].department_id){
					productSalesTotal += res[i].product_sales;

					tableArray.push({
						department_id: res[i].department_id,
						department_name: res[i].department_name,
						over_head_costs: res[i].over_head_costs,
						product_sales: productSalesTotal,
						total_profit: productSalesTotal - parseInt(res[i].over_head_costs)
					});

					productSalesTotal = 0;
				};	
			};
			console.table(tableArray);
			supervisorFunction();
	});
};
// console.table([
// 	{
// 		department_id: 0,
// 		department_name: 0,
// 		over_head_costs: 0,
// 		product_sales: 0,
// 		total_profit: 0
// 	}
// ])

// department_id | 
// department_name | 
// over_head_costs | 
// product_sales | 
// total_profit |